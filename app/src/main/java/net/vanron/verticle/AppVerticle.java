package net.vanron.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import net.vanron.service.AppService;

import java.lang.reflect.Method;

/**
 * Created by RV on 31/07/2015.
 */
public class AppVerticle extends AbstractVerticle {

    private static final Logger logger = LoggerFactory.getLogger(AppVerticle.class);

    public void start() {

	EventBus eb = vertx.eventBus();
	eb.consumer("server", (Message<JsonObject> message) -> {
	    handle(message);
	});
    }

    // gère le message recu
    private void handle(Message<JsonObject> message) {

	logger.info("Receive msg = " + message.body());

	JsonObject res = null;
	try {

	    // construction du nom du service
	    String serviceName = message.body().getString("service");
	    StringBuilder serviceSb = new StringBuilder();
	    serviceSb.append("net.vanron.service.");
	    serviceSb.append(serviceName);

	    // récupération de la classe et de la méthode
	    Class<?> aClass = Class.forName(serviceSb.toString());
	    Method serviceMethod = aClass.getDeclaredMethod(message.body().getString("method"), Message.class);

	    // execution du service
	    serviceMethod.invoke(AppService.getInstance(), message);

	} catch (Exception e) {
	    e.printStackTrace();
	}
    }
}
