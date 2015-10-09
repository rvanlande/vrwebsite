package net.vanron.dao;

import java.util.Map;
import java.util.function.Consumer;

/**
 * Created by RV on 21/08/2015.
 */
public interface Dao {

    void getEnLangText(Consumer<Map<String, String>> consumer);

    void getFrLangText(Consumer<Map<String, String>> consumer);
}
