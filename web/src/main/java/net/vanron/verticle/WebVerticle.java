package net.vanron.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.http.HttpServer;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.handler.sockjs.BridgeEvent;
import io.vertx.ext.web.handler.sockjs.BridgeOptions;
import io.vertx.ext.web.handler.sockjs.PermittedOptions;
import io.vertx.ext.web.handler.sockjs.SockJSHandler;

/**
 * Created by RV on 30/07/2015.
 */
public class WebVerticle extends AbstractVerticle {

    private static final Logger logger = LoggerFactory.getLogger(WebVerticle.class);

    public void start() {

	HttpServer server = vertx.createHttpServer();
	Router router = Router.router(vertx);

	SockJSHandler sockJSHandler = SockJSHandler.create(vertx);
	BridgeOptions options = new BridgeOptions();
	PermittedOptions outOpt = new PermittedOptions().setAddress("client");
	options.addOutboundPermitted(outOpt);
	PermittedOptions inOpt = new PermittedOptions().setAddress("server");
	options.addInboundPermitted(inOpt);
	sockJSHandler.bridge(options);
	router.route("/eventbus/*").handler(ctx -> {
	    logger.info("WebVerticle : init eventbus connection from : " + ctx.request().remoteAddress());
//	    ctx.request().headers().forEach(entry -> {
//		 logger.info("WebVerticle : header : " + entry.getKey() + " " + entry.getValue());
//	    });
	    ctx.next();
	});
	router.route("/eventbus/*").handler(sockJSHandler);



	StaticHandler staticHandler = StaticHandler.create();
	//        staticHandler.setWebRoot("webroot"); // default webroot is webroot folder
	staticHandler.setIndexPage("ui/html/index.html");
	router.route("/*").handler(staticHandler);

	server.requestHandler(router::accept).listen(8080);
    }
}
