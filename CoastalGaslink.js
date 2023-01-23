

window.onscroll = function() {myFunction()};

function changeElements(background, title, footer, names=""){
  document.getElementById("container").style.backgroundImage = background;
  document.getElementById("title").innerHTML = title;
  document.getElementById("footer").innerHTML = footer;
  document.getElementById("names").innerHTML = names;
}

function myFunction() {
  var margin = 1500;
  if (document.body.scrollTop > margin * 26 || document.documentElement.scrollTop > margin * 26) {
    changeElements("url('')",
    "",
    "")
  } else if (document.body.scrollTop > margin * 25 || document.documentElement.scrollTop > margin * 25) {
    changeElements("url('images/Wetsuweten05.png')",
    "Global Gaslink: The Right to Land, from First Nations to Multinational Corporation",
    "The Coastal GasLink pipeline plans to cut through several indigenious territories.<sup>17</sup>")
  } else if (document.body.scrollTop > margin * 23 || document.documentElement.scrollTop > margin * 23) {
    changeElements("url('images/NationalPipeline.png')",
    "Link to the TransCanada Energy pipeline network",
    "Coastal Gaslink and Liquid Gas Pipelines throughout North America.<sup>16</sup>")
  } else if (document.body.scrollTop > margin * 22 || document.documentElement.scrollTop > margin * 22) {
    changeElements("url('images/Modified.png')",
    "The Final Route",
    "The final proposal that TC Energy decided on and was approved for construction.<sup>15</sup>")
  } else if (document.body.scrollTop > margin * 21 || document.documentElement.scrollTop > margin * 21) {
    changeElements("url('images/Wetsuweten04.png')",
    "Wet’suwet’en's Proposal: The McDonnel Lake Route",
    "Wet'suwet'en’s proposed route is away from their hunting resources and cultural center and  closer to Yellowhead  Highway which is already heavily distributed.")
  } else if (document.body.scrollTop > margin * 20 || document.documentElement.scrollTop > margin * 20) {
    changeElements("url('images/Wetsuweten03.png')",
    "Wet’suwet’en's Proposal: The McDonnel Lake Route",
    "Gidimt’en Checkpoint is in constant conflict as the only point of land access to section 7 of the pipeline route in Wet'suwet'en territory.<sup>13</sup>")
  } else if (document.body.scrollTop > margin * 19 || document.documentElement.scrollTop > margin * 19) {
    changeElements("url('images/Wetsuweten02.png')",
    "Wet’suwet’en's Proposal: The McDonnel Lake Route",
    "Wet'suwet'en’s proposal for an alternative route was rejected by TC Energy due to ‘significant increase in construction time and cost.<sup>12</sup>")
  } else if (document.body.scrollTop > margin * 18 || document.documentElement.scrollTop > margin * 18) {
    changeElements("url('images/Wetsuweten01.png')",
    "Wet’suwet’en Territory",
    "The pipeline runs through 11 clans’ region in Wet'suwet'en territories. <sup>11</sup>")
  } else if (document.body.scrollTop > margin * 15 || document.documentElement.scrollTop > margin * 15) {
    changeElements("url('images/Original.png')",
    "The Original Pipeline Proposal",
    "TC Energy’s original proposal for the Coastal GasLink pipeline in 2012 <sup>10</sup>")
  } else if (document.body.scrollTop > margin * 13 || document.documentElement.scrollTop > margin * 13) {
    changeElements("url('images/Graphs.jpg')",
    "The Pacific Rim: Asian Markets",
    "The impetus for the Coastal Gaslink project is based not only on a growing demand from Asian markets, but also shaped by increasing pressure within the US to achieve energy independence from Canada.<sup>9</sup>")
  } else if (document.body.scrollTop > margin * 9 || document.documentElement.scrollTop > margin * 9) {
    changeElements("url('images/GlobalMap_Combined_NEW.gif')",
    "The Pacific Rim: Asian Markets",
    "LNG import was confined to Japan up until the 1980s, before slowly expanding in the following decades.<sup>5,6</sup>")
  } else if (document.body.scrollTop > margin * 7 || document.documentElement.scrollTop > margin * 7) {
    changeElements("url('images/KitimatLNGTerminal.jpg')",
    "Terminus Point: Kitimat, the Pop-Up City",
    "The Coastal Gaslink’s LNG port is located just outside of Kitimat opening onto the Douglas Channel. (Source: Bloomberg 2019 / Photographer: Ben Nelms)")
  } else if (document.body.scrollTop > margin * 6 || document.documentElement.scrollTop > margin * 6) {
    changeElements("url('images/RCM_UNISTOTEN.gif')",
    "Gidimt’en Checkpoint: Access Point to the Wet’suwet’en lands; Wedzin Kwa Bridge",
    "Unist'ot'en Blockade On Feb. 10, 2020 (Source: @unistotencamp / Twitter)")
  } else if (document.body.scrollTop > margin * 5 || document.documentElement.scrollTop > margin * 5) {
    changeElements("url('images/CedarValleyLodge.jpeg')",
    "Covid-19 and Critical Infrastructure in the Coastal Gaslink Pipeline Project",
    "Cedar Valley Lodge is the first of two temporary dormitories to be constructed in the LNG Kitimat camp. (Source: Bird-ATCO/ The Narwal)")
  } else if (document.body.scrollTop > margin * 4 || document.documentElement.scrollTop > margin * 4) {
    changeElements("url('images/WorkersCampNames.png')",
    "Covid-19 and Critical Infrastructure in the Coastal Gaslink Pipeline Project",
    "Worker camps plan to reach peak occupancy of 3670 by summer 2020.")
  } else if (document.body.scrollTop > margin * 3 || document.documentElement.scrollTop > margin * 3) {
    changeElements("url('images/ConstructionStatus.gif')",
    "Covid-19 and Critical Infrastructure in the Coastal Gaslink Pipeline Project",
    "Pipeline ‘Right-of-way’ route clearing from January 2020  to April 2020.")
  } else if (document.body.scrollTop > margin * 2 || document.documentElement.scrollTop > margin * 2) {
    changeElements("url('images/TorontoProtest.jpg')",
      "Covid-19 and Critical Infrastructure in the Coastal Gaslink Pipeline Project",
      "Thousands throughout cities in Canada protest in solidarity with Wet'suwet'en earlier this year (Source: Reuters/Chris Helgren)")
  } else if (document.body.scrollTop > margin  || document.documentElement.scrollTop > margin ) {
    changeElements("url('images/UnistotenFeb.jpg')",
      "Covid-19 and Critical Infrastructure in the Coastal Gaslink Pipeline Project",
      "RCMP arresting protestors in front of Unist'ot'en healing center in Feb. 10, 2020. (Source: Amber Bracken / The Intercept)")
  } else {
    changeElements("url('images/CoverBlank.jpg')",
    "Global Gaslink: The Right to Land, from First Nations to Multinational Corporation",
    "Coastal Gaslink continues to clear pipeline route amidst COVID-19 pandemic (Source: 2020)",
    "Adeline Chum, Genevieve Mateyko, Shuang Bi")
  }
}
