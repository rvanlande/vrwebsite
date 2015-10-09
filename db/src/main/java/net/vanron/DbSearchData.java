package net.vanron;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;

/**
 * Created by RV on 21/08/2015.
 */
public class DbSearchData {

    public static void main(String[] args) {

	Client client = new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));

//	SearchResponse searchResponse = client.prepareSearch().execute().actionGet();
//	for (SearchHit hit : searchResponse.getHits().getHits()) {
//	    System.out.println(hit.getSource());
//	}

	SearchResponse searchResponse = client.prepareSearch("language").setQuery(QueryBuilders.matchQuery("lang", "en")).execute().actionGet();
	for (SearchHit hit : searchResponse.getHits().getHits()) {
	    System.out.println(hit.getSource());
	}

	client.close();
    }
}
