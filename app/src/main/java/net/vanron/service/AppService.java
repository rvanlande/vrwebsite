package net.vanron.service;

import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;
import net.vanron.dao.DaoFactory;

import java.util.Map;

/**
 * Created by RV on 09/03/2015.
 */
public class AppService {

    private static AppService appService;

    // ~ Static methods ------------------------------------------------------------------------------------------------------------------------------

    public static AppService getInstance() {

	if (appService == null) {
	    appService = new AppService();
	}
	return appService;
    }

    // ~ Service methods -----------------------------------------------------------------------------------------------------------------------------

    public void getEn(Message<JsonObject> message) {

	DaoFactory.getDao().getEnLangText(langText -> {

	    message.reply(buildLangTextJson(langText));
	});
    }

    public void getFr(Message<JsonObject> message) {

	DaoFactory.getDao().getFrLangText(langText -> {

	     message.reply(buildLangTextJson(langText));
	});
    }

    // ~ private methods -----------------------------------------------------------------------------------------------------------------------------

    private JsonObject buildLangTextJson(Map<String, String> langMap) {

	JsonObject jsonObj = new JsonObject();

	if (langMap != null) {

	    langMap.forEach((key, value) -> {
		jsonObj.put(key, value);
	    });
	}

	return jsonObj;
    }
}

