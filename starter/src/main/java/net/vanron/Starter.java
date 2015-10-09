package net.vanron;

import io.vertx.core.Verticle;
import io.vertx.core.Vertx;
import net.vanron.verticle.AppVerticle;
import net.vanron.verticle.WebVerticle;

/**
 * Created by RV on 31/07/2015.
 */
public class Starter {

    public static void main(String[] args) {

	Vertx vertx = Vertx.vertx();

	// déploiement du verticle : WebVerticle
	Verticle webVerticle = new WebVerticle();
	vertx.deployVerticle(webVerticle, res -> {
	    if (res.succeeded()) {
		System.out.println("Deployment WebVerticle succeeded ! ");
	    } else {
		System.out.println("Deployment WebVerticle failed ! ");
	    }
	});

	// déploiement du verticle : AppVerticle
	Verticle appVerticle = new AppVerticle();
	vertx.deployVerticle(appVerticle, res -> {
	    if (res.succeeded()) {
		System.out.println("Deployment AppVerticle succeeded ! ");
	    } else {
		System.out.println("Deployment AppVerticle failed ! ");
	    }
	});
    }
}
