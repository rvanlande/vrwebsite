package net.vanron.dao.impl;

import net.vanron.dao.Dao;
import org.elasticsearch.action.ActionListener;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

/**
 * Created by RV on 21/08/2015.
 */
public class DaoImpl implements Dao {

    private Client client;

    public DaoImpl() {
	client = new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
    }

    @Override
    public void getEnLangText(Consumer<Map<String, String>> consumer) {

	client.prepareSearch("language").setQuery(QueryBuilders.matchQuery("lang", "en")).execute(new ActionListener<SearchResponse>() {

	    @Override
	    public void onResponse(SearchResponse searchResponse) {
		consumer.accept(buildLangText(searchResponse));
	    }

	    @Override
	    public void onFailure(Throwable e) {
	    }
	});
    }

    @Override
    public void getFrLangText(Consumer<Map<String, String>> consumer) {

	client.prepareSearch("language").setQuery(QueryBuilders.matchQuery("lang", "fr")).execute(new ActionListener<SearchResponse>() {

	    @Override
	    public void onResponse(SearchResponse searchResponse) {
		consumer.accept(buildLangText(searchResponse));
	    }

	    @Override
	    public void onFailure(Throwable e) {
	    }
	});
    }

    // ~ private methods -----------------------------------------------------------------------------------------------------------------------------

    private Map<String, String> buildLangText(SearchResponse searchResponse) {

	Map<String, String> langMap = new HashMap<>();

	for (SearchHit hit : searchResponse.getHits().getHits()) {

	    hit.getSource().forEach((key, value) -> {
		langMap.put(key, (String) value);
	    });
	}

	return langMap;
    }

}
