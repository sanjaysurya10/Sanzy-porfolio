package in.bushansirgur.portfolio.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Controller
public class HomeController {

    private static final Logger log = LoggerFactory.getLogger(HomeController.class);
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.anon-key}")
    private String supabaseAnonKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping({"/", "", "/home"})
    public String showHomePage(Model model) {
        model.addAttribute("title", "Home");
        return "master";
    }

    @GetMapping("/projects")
    public String showProjectPage(Model model) {
        model.addAttribute("title", "Projects");
        return "master";
    }

    @GetMapping("/resume")
    public String showResumePage(Model model) {
        model.addAttribute("title", "Resume");
        return "master";
    }

    @GetMapping("/contact")
    public String showContactPage(Model model) {
        model.addAttribute("title", "Contact");
        return "master";
    }

    @PostMapping("/contact/submit")
    @ResponseBody
    public ResponseEntity<Map<String, String>> submitContact(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String phone,
            @RequestParam String message) {

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("apikey", supabaseAnonKey);
            headers.set("Authorization", "Bearer " + supabaseAnonKey);

            String body = objectMapper.writeValueAsString(
                Map.of("name", name, "email", email, "phone", phone, "message", message)
            );

            HttpEntity<String> request = new HttpEntity<>(body, headers);
            restTemplate.postForEntity(
                supabaseUrl + "/rest/v1/contact_submissions",
                request,
                String.class
            );

            log.info("Contact saved to Supabase: {} <{}>", name, email);
            return ResponseEntity.ok(Map.of("status", "success"));

        } catch (Exception e) {
            log.error("Supabase insert failed: {}", e.getMessage());
            return ResponseEntity.internalServerError().body(Map.of("status", "error"));
        }
    }
}
