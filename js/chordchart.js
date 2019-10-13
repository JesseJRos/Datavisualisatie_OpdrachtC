// Resources
document.getElementById("https://www.amcharts.com/lib/4/core.js").src
document.getElementById("https://www.amcharts.com/lib/4/charts.js").src
document.getElementById("https://www.amcharts.com/lib/4/themes/dark.js").src
document.getElementById("https://www.amcharts.com/lib/4/animated.js").src

// Chart code
<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.ChordDiagram);

// colors of main characters
chart.colors.saturation = 0.50;
chart.colors.step = 2;
var colors = {
    Aalsmeer:chart.colors.next(),
    Alkmaar:chart.colors.next(),
    Amersfoort:chart.colors.next(),
    Amsterdam:chart.colors.next(),
    Amstelveen:chart.colors.next(),
    Badhoevedorp:chart.colors.next(),
    Castricum:chart.colors.next(),
    DenHaag:chart.colors.next(),
    Diemen:chart.colors.next(),
    Haarlem:chart.colors.next(),
    Heemstede:chart.colors.next(),
    Heerhugowaard:chart.colors.next(),
    Heiloo:chart.colors.next(),
    Hoofddorp:chart.colors.next(),
    Hoogland:chart.colors.next(),
    Krommenie:chart.colors.next(),
    Linschoten:chart.colors.next(),
    Leiderdorp:chart.colors.next(),
    Lelystad:chart.colors.next(),
    Maarssen:chart.colors.next(),
    Naarden:chart.colors.next(),
    Oegstgeest:chart.colors.next(),
    Purmerend:chart.colors.next(),
    Swifterbant:chart.colors.next(),
    Uithoorn:chart.colors.next(),
    Vijfhuizen:chart.colors.next(),
    Wateringen:chart.colors.next(),
    Weesp:chart.colors.next(),
    Woerden:chart.colors.next(),
    Wormer:chart.colors.next(),
    Zaandam:chart.colors.next(),
    "0 tot 1000":chart.colors.next(),
    "1000 tot 5000":chart.colors.next(),
    "5000 tot 10.000":chart.colors.next(),
    "10.000 tot 15.000":chart.colors.next(),
    "15.000 tot 20.000":chart.colors.next(),
    "20.000 tot 25.000":chart.colors.next(),
    "25.000 of meer":chart.colors.next()
}

chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here

//woonplaatsen
{"from":"Aalsmeer", "image":"", "color":colors.Aalsmeer},
{"from":"Alkmaar", "image":"", "color":colors.Alkmaar},
{"from":"Amersfoort", "image":"", "color":colors.Amersfoort},
{"from":"Amsterdam", "image":"", "color":colors.Amsterdam},
{"from":"Amstelveen", "image":"", "color":colors.Amstelveen},
{"from":"Badhoevedorp", "image":"", "color":colors.Badhoevedorp},
{"from":"Castricum", "image":"", "color":colors.Castricum},
{"from":"Den Haag", "image":"", "color":colors.DenHaag},
{"from":"Diemen", "image":"", "color":colors.Diemen},
{"from":"Haarlem", "image":"", "color":colors.Haarlem},
{"from":"Heemstede", "image":"", "color":colors.Heemstede},
{"from":"Heerhugowaard", "image":"", "color":colors.Heerhugowaard},
{"from":"Heiloo", "image":"", "color":colors.Heiloo},
{"from":"Hoofddorp", "image":"", "color":colors.Hoofddorp},
{"from":"Hoogland", "image":"", "color":colors.Hoogland},
{"from":"Krommenie", "image":"", "color":colors.Krommenie},
{"from":"Linschoten", "image":"", "color":colors.Linschoten},
{"from":"Leiderdorp", "image":"", "color":colors.Leiderdorp},
{"from":"Lelystad", "image":"", "color":colors.Lelystad},
{"from":"Maarssen", "image":"", "color":colors.Maarssen},
{"from":"Naarden", "image":"", "color":colors.Naarden},
{"from":"Oegstgeest", "image":"", "color":colors.Oegstgeest},
{"from":"Purmerend", "image":"", "color":colors.Purmerend},
{"from":"Swifterbant", "image":"", "color":colors.Swifterbant},{"from":"Uithoorn", "image":"", "color":colors.Uithoorn},
{"from":"Vijfhuizen", "image":"", "color":colors.Vijfhuizen},
{"from":"Wateringen", "image":"", "color":colors.Wateringen},
{"from":"Weesp", "image":"", "color":colors.Weesp},
{"from":"Woerden", "image":"", "color":colors.Woerden},
{"from":"Wormer", "image":"", "color":colors.Wormer},
{"from":"Zaandam", "image":"", "color":colors.Zaandam},

// studieschuld    
{"from":"0 tot 1000", "image":"", "color":colors.nuld},
{"from":"1000 tot 5000", "image":"", "color":colors.dvijfd},
{"from":"5000 tot 10.000", "image":"", "color":colors.vijfdtiend},
{"from":"10.000 tot 15.000", "image":"", "color":colors.tiendvijftiend},
{"from":"15.000 tot 20.000", "image":"", "color":colors.vijftiendtwintigd},
{"from":"20.000 tot 25.000", "image":"", "color":colors.twintigdvijftwintigd},
{"from":"25.000 of meer", "image":"", "color":colors.vijfentwintigdmeer},

// berekende data
{"from":"Aalsmeer","to":"5000 tot 10.000","value":1},
{"from":"Alkmaar","to":"1000 tot 5000","value":1},
{"from":"Amersfoort","to":"0 tot 1000","value":1},
{"from":"Amsterdam","to":"0 tot 1000","value":5},
{"from":"Amsterdam","to":"1000 tot 5000","value":2},
{"from":"Amsterdam","to":"10.000 tot 15.000","value":2},
{"from":"Amsterdam","to":"15.000 tot 20.000","value":3},
{"from":"Amsterdam","to":"20.000 tot 25.000","value":4},
{"from":"Amsterdam","to":"25.000 of meer","value":4},
{"from":"Amstelveen","to":"5000 tot 10.000","value":1},
{"from":"Amstelveen","to":"10.000 tot 15.000","value":1},
{"from":"Amstelveen","to":"15.000 tot 20.000","value":1},
{"from":"Badhoevedorp","to":"0 tot 1000","value":1},
{"from":"Castricum","to":"0 tot 1000","value":1},
{"from":"Den Haag","to":"15.000 tot 20.000","value":1},
{"from":"Diemen","to":"0 tot 1000","value":1},
{"from":"Haarlem","to":"0 tot 1000","value":2},
{"from":"Heemstede","to":"0 tot 1000","value":1},
{"from":"Heerhugowaard","to":"5000 tot 10.000","value":1},
{"from":"Heiloo","to":"5000 tot 10.000","value":1},
{"from":"Hoofddorp","to":"1000 tot 5000","value":1},
{"from":"Hoofddorp","to":"5000 tot 10.000","value":1},
{"from":"Hoofddorp","to":"10.000 tot 15.000","value":2},
{"from":"Hoogland","to":"5000 tot 10.000","value":1},
{"from":"Krommenie","to":"10.000 tot 15.000","value":1},
{"from":"Linschoten","to":"5000 tot 10.000","value":1},
{"from":"Leiderdorp","to":"5000 tot 10.000","value":1},
{"from":"Lelystad","to":"0 tot 1000","value":1},
{"from":"Maarssen","to":"1000 tot 5000","value":1},
{"from":"Naarden","to":"5000 tot 10.000","value":1},
{"from":"Oegstgeest","to":"25.000 of meer","value":1},
{"from":"Purmerend","to":"0 tot 1000","value":2},
{"from":"Purmerend","to":"1000 tot 5000","value":2},
{"from":"Swifterbant","to":"1000 tot 5000","value":1},
{"from":"Uithoorn","to":"0 tot 1000","value":1},
{"from":"Uithoorn","to":"10.000 tot 15.000","value":1},
{"from":"Vijfhuizen","to":"0 tot 1000","value":1},
{"from":"Wateringen","to":"0 tot 1000","value":1},
{"from":"Wateringen","to":"1000 tot 5000","value":1},
{"from":"Weesp","to":"0 tot 1000","value":3},
{"from":"Woerden","to":"5000 tot 10.000","value":1},
{"from":"Wormer","to":"0 tot 1000","value":2},
{"from":"Zaandam","to":"0 tot 1000","value":1},
{"from":"Zaandam","to":"1000 tot 5000","value":1},]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 14;

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Klik om te tonen/verbergen of sleep om te verplaatsen";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}se studenten: {total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function(fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function(dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName} & {toName}:{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Datasets: CMD enquete en Studentenmonitor.nl";
creditLabel.url = "";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";

var titleImage = chart.chartContainer.createChild(am4core.Image);
//titleImage.href = ;
titleImage.x = 30
titleImage.y = 30;
titleImage.width = 200;
titleImage.height = 200;

}); // end am4core.ready()
