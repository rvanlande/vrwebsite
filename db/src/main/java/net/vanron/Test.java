package net.vanron;

import java.util.Locale;
import java.util.ResourceBundle;

/**
 * Created by RV on 21/08/2015.
 */
public class Test {

    public static void main(String[] args) {

	ResourceBundle rb = ResourceBundle.getBundle("lang", Locale.FRENCH);
	System.out.println(rb.getString("about.citation"));

    }
}
