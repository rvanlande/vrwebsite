package net.vanron.dao;

import net.vanron.dao.impl.DaoImpl;

/**
 * Created by RV on 21/08/2015.
 */
public class DaoFactory {

    private static Dao dao;

    public static Dao getDao() {
	if (dao == null) {
	    dao = new DaoImpl();
	}
	return dao;
    }
}
