package net.vanron;

import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

/**
 * Created by RV on 21/08/2015.
 */
public class DbDeleteData {

    public static void main(String[] args) {

	Client client = new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));

	deleteAllDocuments(client);

	client.close();
    }

    public static void deleteAllDocuments(Client client) {

	client.admin().indices().delete(new DeleteIndexRequest("_all"));

	//	BulkRequestBuilder bulkRequest = client.prepareBulk();
	//
	//	SearchResponse searchResponse = client.prepareSearch().execute().actionGet();
	//	for (SearchHit hit : searchResponse.getHits().getHits()) {
	//
	//	    bulkRequest.add(client.prepareDelete().setIndex("language").setType("lang").setId(hit.getId()));
	//	}
	//
	//	BulkResponse bulkResponse = bulkRequest.execute().actionGet();
	//	if (bulkResponse.hasFailures()) {
	//	    System.out.println("delete failure !!");
	//	}
    }

}
