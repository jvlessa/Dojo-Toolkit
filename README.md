<p align="center">
  <img src="https://github.com/jvlessa/Dojo-Toolkit-v1--ArcGis/blob/master/images/dojo-logo.png" width="350">
</p>

<p align="center">This project was created to test Dojo Toolkit framework and use <b>ArcGis API for Javascript</b></p>

## References
* Dojo [API](https://dojotoolkit.org/api/)
* Dojo [Tutorials](https://dojotoolkit.org/documentation/#tutorials)
* Esri API [for JavaScript](https://developers.arcgis.com/javascript/3/jsapi/)

## Usage
* **require**: enables you to load modules and use them;
* **define**: allows you to define your own modules;

## Package distribution
* **Dojo**: 
This is the main part of Dojo and the most generally applicable packages and modules are contained in here. The core covers a wide range of functionality like AJAX, DOM manipulation, class-type programming, events, promises, data stores, drag-and-drop and internationalization libraries.

* **Dijit**: 
An extensive set of widgets (user interface components) and the underlying system to support them. It is built fully on-top of the Dojo core.

* **DojoX**: 
A collection of packages and modules that provide a vast array of functionality that are built upon both the Dojo core and Dijit. Packages and modules contained in DojoX will have varying degrees of maturity, denoted within the README files of each package. Some of the modules are extremely mature and some are highly experimental.

* **Util**: 
Various tools that support the rest of the toolkit, like being able to build, test and document code.

* **dgrid**: 
A full featured, lightweight data grid.

* **gridx**: 
A fast rendering, modularized, plugin based grid.

## Things you should know about ArcGis and Maps
* **Feature Class** classes are homogeneous collections of common features, each having the same spatial representation, such as points, lines, or polygons, and a common set of attribute columns. A set of common geographic features, for example roads, or parcels, or land use, as they are stored in a geodatabase or shapefile, or other storage format. 

* **Feature Layer** is the representation of a feature class after it is loaded into ArcMap;

* **Layer File (.lyr)** is a file that stores the path to a source dataset and other layer properties, including symbology. In comparison to a shapefile, a layer file is a just a link\reference to actual data, such as a shapefile, feature class, etc;

* **Geodatabase** is an alternate way to store GIS information in one large file, which can contain multiple point, polygon, and/or polyline layers;

* **Shapefile** is an Esri vector data storage **format** for storing the location, shape, and attributes of geographic features;
