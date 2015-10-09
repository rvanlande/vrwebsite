package net.vanron;

import org.elasticsearch.action.ActionListener;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

import java.io.IOException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;

/**
 * Created by RV on 21/08/2015.
 */
public class DbInsertData {

    public static void main(String[] args) {

	Client client = new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));

	DbDeleteData.deleteAllDocuments(client);

	putLangDocument(client, ResourceBundle.getBundle("lang", Locale.FRENCH), "fr");
	putLangDocument(client, ResourceBundle.getBundle("lang", Locale.ENGLISH), "en");

	try {
	    System.in.read();
	} catch (IOException e) {
	    e.printStackTrace();
	}
	client.close();
    }

    private static void putLangDocument(Client client, ResourceBundle rsb, String lang) {

	Map<String, Object> doc = new HashMap<>();
	doc.put("lang", lang);

	rsb.keySet().forEach(key -> {
	    doc.put(key, rsb.getString(key));
	});

	client.prepareIndex("language", "lang").setSource(doc).execute(new ActionListener<IndexResponse>() {

	    @Override
	    public void onResponse(IndexResponse indexResponse) {
		System.out.println("inserted doc = " + indexResponse.getId());
	    }

	    @Override
	    public void onFailure(Throwable e) {
	    }
	});
    }
}
