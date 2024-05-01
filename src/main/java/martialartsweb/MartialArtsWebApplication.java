package martialartsweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MartialArtsWebApplication {


	public static void main(String[] args) {
		SpringApplication.run(MartialArtsWebApplication.class, args);
	}


}
