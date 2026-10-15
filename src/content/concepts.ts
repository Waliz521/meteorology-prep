export type ConceptFigure = {
  src: string
  alt: string
  caption: string
  credit: string
  href: string
}

export type Concept = {
  title: string
  body: string[]
  figure?: ConceptFigure
}

export type WorkedCalculation = {
  title: string
  given: string
  working: string
  answer: string
}

export type ConceptTopic = {
  title: string
  intro: string
  items: Concept[]
  calculations?: WorkedCalculation[]
}

const coriolis: ConceptFigure = {
  src: '/concepts/coriolis.svg',
  alt: 'Flow around a low, with the pressure-gradient force inward and the Coriolis force perpendicular to the wind.',
  caption: 'Around a low, the pressure-gradient force (blue) points inward. The Coriolis force (red) is perpendicular to the wind, so the air curves instead of running straight into the centre.',
  credit: 'Roland Geider, after Cleontuni. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Coriolis_effect10.svg',
}

const saturation: ConceptFigure = {
  src: '/concepts/saturation-humidity.svg',
  alt: 'Curve of the maximum water vapour air can hold as temperature rises.',
  caption: 'The ceiling for water vapour rises steeply as air gets warmer. Relative humidity is how full the air is compared with this ceiling.',
  credit: 'Retemirabile. CC BY-SA 4.0. Wikimedia Commons.',
  href: 'https://commons.wikimedia.org/wiki/File:Taupunktkurve.svg',
}

const circulation: ConceptFigure = {
  src: '/concepts/atmospheric-circulation.svg',
  alt: 'Hadley, Ferrel and polar cells on a cross-section of the atmosphere.',
  caption: 'Air rises near the equator, sinks in the subtropics, and rises again in the mid-latitude storm belt. Those overturning cells are the Hadley, Ferrel and polar cells.',
  credit: 'Wikimedia Commons, File:Atmospheric circulation.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Atmospheric_circulation.svg',
}

const greenhouse: ConceptFigure = {
  src: '/concepts/greenhouse.png',
  alt: 'US EPA diagram of sunlight arriving, the surface warming, and greenhouse gases returning infrared radiation.',
  caption: 'Sunlight warms the surface. The surface emits infrared radiation. Greenhouse gases absorb some of that infrared and send part of it back down, so the surface is warmer than it would be without them.',
  credit: 'US Environmental Protection Agency, 2012. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Earth%27s_greenhouse_effect_(US_EPA,_2012).png',
}

const anomaly: ConceptFigure = {
  src: '/concepts/temperature-anomaly.svg',
  alt: 'Chart of the global land and ocean temperature index over time.',
  caption: 'A temperature index shows how much warmer or cooler each year is than the long-term average. The recent rise is the observation behind global warming.',
  credit: 'Wikimedia Commons, File:Global Temperature Anomaly.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Global_Temperature_Anomaly.svg',
}

const carbon: ConceptFigure = {
  src: '/concepts/carbon-cycle.svg',
  alt: 'Diagram of carbon moving among the air, plants, soil, ocean and fossil fuels.',
  caption: 'Carbon moves among the air, plants, soil and ocean. Burning fossil fuels adds carbon dioxide to the air faster than those stores take it back.',
  credit: 'Wikimedia Commons, File:Carbon cycle-cute diagram.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Carbon_cycle-cute_diagram.svg',
}

const waves: ConceptFigure = {
  src: '/concepts/p-s-waves.jpg',
  alt: 'USGS diagram of P waves, S waves and surface waves from an earthquake.',
  caption: 'P waves push and pull the rock and arrive first. S waves shear the rock from side to side and arrive later. Surface waves travel along the outside of the Earth.',
  credit: 'US Geological Survey. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Pswaves.jpg',
}

const epicenter: ConceptFigure = {
  src: '/concepts/epicenter.svg',
  alt: 'Cross-section marking the underground focus and the epicentre on the surface.',
  caption: 'The focus, or hypocentre, is where the rupture starts underground. The epicentre is the point on the ground directly above it.',
  credit: 'Derived from a diagram by Sam Hocevar. Wikimedia Commons.',
  href: 'https://commons.wikimedia.org/wiki/File:Epicenter_Diagram.svg',
}

const shadow: ConceptFigure = {
  src: '/concepts/shadow-zone.svg',
  alt: 'Paths of P and S waves through the mantle and core, with shadow zones on the far side.',
  caption: 'S waves stop at the liquid outer core, so a large part of the far side of the Earth receives none. P waves bend as they cross the core and leave a narrower shadow.',
  credit: 'Vanessa Ezekowitz, after a US Geological Survey figure. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Earthquake_wave_shadow_zone.svg',
}

const faults: ConceptFigure = {
  src: '/concepts/fault-types.svg',
  alt: 'Three panels showing the principal kinds of geological fault.',
  caption: 'The three principal faults. Blocks may slide sideways (strike-slip), the upper block may drop (normal), or the upper block may be pushed up (reverse).',
  credit: 'Karta24, after the US Geological Survey. Wikimedia Commons.',
  href: 'https://commons.wikimedia.org/wiki/File:Fault_types.svg',
}

const layers: ConceptFigure = {
  src: '/concepts/earth-layers.svg',
  alt: 'Cutaway of Earth showing crust, mantle, liquid outer core and solid inner core.',
  caption: 'A thin crust, a thick mantle, a liquid outer core and a solid inner core. The inset enlarges the outer layers, which are too thin to see on a true-scale drawing.',
  credit: 'US Geological Survey; vector version on Wikimedia Commons.',
  href: 'https://commons.wikimedia.org/wiki/File:Earth_cutaway_schematic-en.svg',
}

const rocks: ConceptFigure = {
  src: '/concepts/rock-cycle.png',
  alt: 'National Park Service diagram of the rock cycle.',
  caption: 'Igneous, sedimentary and metamorphic rocks change into one another by melting, weathering, burial, heat and pressure.',
  credit: 'US National Park Service / US Geological Survey. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Rock_cycle_nps.PNG',
}

const plates: ConceptFigure = {
  src: '/concepts/plates.svg',
  alt: 'Map of the major tectonic plates and their boundaries.',
  caption: 'The outer shell is broken into plates. They separate, collide, or slide past one another. Earthquakes and many volcanoes sit on those boundaries.',
  credit: 'Wikimedia Commons, File:Plates tect2 en.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Plates_tect2_en.svg',
}

const spectrum: ConceptFigure = {
  src: '/concepts/em-spectrum.svg',
  alt: 'The electromagnetic spectrum from radio waves through visible light to gamma rays.',
  caption: 'Wavelength decreases from radio waves to gamma rays. Weather satellites use visible light and infrared, which sit in the middle of this range.',
  credit: 'Wikimedia Commons, File:EM spectrum.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:EM_spectrum.svg',
}

const method: ConceptFigure = {
  src: '/concepts/scientific-method.svg',
  alt: 'Cycle of observation, hypothesis, experiment and conclusion.',
  caption: 'A question leads to a hypothesis, then to a test. The result supports the hypothesis or sends the investigator back to revise it.',
  credit: 'Wikimedia Commons, File:Scientific method.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Scientific_method.svg',
}

const atmosphere: ConceptFigure = {
  src: '/concepts/atmosphere-layers.svg',
  alt: 'Layers of the atmosphere from the troposphere up to the thermosphere, with the ozone layer marked in the stratosphere.',
  caption: 'Almost all weather sits in the troposphere. The ozone that absorbs harmful ultraviolet light is mainly in the stratosphere above it. Temperature falls with height in the troposphere and rises again through the ozone layer.',
  credit: 'NOAA, vectorised by Mysid. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Atmosphere_layers-en.svg',
}

const clouds: ConceptFigure = {
  src: '/concepts/cloud-types.svg',
  alt: 'Chart of high, middle and low clouds, including cirrus, cumulus, stratus and cumulonimbus.',
  caption: 'High wispy clouds are cirrus. Flat sheets are stratus. Heaped clouds are cumulus. The tall thunderstorm cloud is cumulonimbus.',
  credit: 'Valentin de Bruyn / Coton. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Cloud_types_en.svg',
}

const warmFront: ConceptFigure = {
  src: '/concepts/warm-front.svg',
  alt: 'Cross-section of a warm front, with warm air rising gently over the retreating cold air.',
  caption: 'At a warm front the warm air climbs slowly over the cooler air ahead of it. Cloud thickens and rain often lasts for hours. At a cold front the cold air undercuts the warm air more steeply, so showers and thunderstorms are briefer and sharper.',
  credit: 'Kelvinsong. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Warm_front.svg',
}

const coldFront: ConceptFigure = {
  src: '/concepts/cold-front.jpg',
  alt: 'Photograph of the cloud wall along a cold front.',
  caption: 'The steep leading edge of a cold front lifts warm air quickly. The result is often a line of tall cloud, a short burst of heavy rain, then cooler, clearer air.',
  credit: 'Public domain. Wikimedia Commons, File:Cold front.jpg.',
  href: 'https://commons.wikimedia.org/wiki/File:Cold_front.jpg',
}

const airMasses: ConceptFigure = {
  src: '/concepts/air-masses.svg',
  alt: 'World map of source regions for continental polar, maritime tropical and the other main air masses.',
  caption: 'An air mass takes its character from the surface it rests over. Continental polar (cP) is cold and dry. Maritime tropical (mT) is warm and moist. The first letter is the surface, the second is the latitude.',
  credit: 'Public domain. Wikimedia Commons, File:Air masses.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Air_masses.svg',
}

const jet: ConceptFigure = {
  src: '/concepts/jet-stream.svg',
  alt: 'Cross-section of the polar and subtropical jet streams in the upper troposphere.',
  caption: 'The jet streams are narrow ribbons of very fast wind near the top of the troposphere. The polar jet steers the travelling lows of the mid-latitudes.',
  credit: 'National Weather Service JetStream; vector by Sleske. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Jetcrosssection.svg',
}

const cyclone: ConceptFigure = {
  src: '/concepts/hurricane.svg',
  alt: 'Cross-section of a tropical cyclone, with the calm eye, the eyewall and the spiral rainbands.',
  caption: 'A mature tropical cyclone has a calm eye, a ring of the strongest wind and rain called the eyewall, and spiral bands outside it. Most of its energy comes from the condensation of water evaporated from a warm sea.',
  credit: 'Kelvinsong, after NOAA and Environment Canada. CC BY 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Hurricane-en.svg',
}

const monsoon: ConceptFigure = {
  src: '/concepts/monsoon.svg',
  alt: 'Map of the usual arrival and retreat of the South Asian summer monsoon.',
  caption: 'The lines mark the usual dates when the summer monsoon arrives and later withdraws. The words on the map are French, for arrival and retreat. Over Pakistan the summer rains are this monsoon, and they peak in July and August.',
  credit: 'Loveless. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Monsoon.svg',
}

const screen: ConceptFigure = {
  src: '/concepts/stevenson.jpg',
  alt: 'A white louvered Stevenson screen standing on a grass plot.',
  caption: 'Thermometers are kept in a white, louvered Stevenson screen so that the reading is the temperature of the air, not the temperature of an instrument sitting in the sun.',
  credit: 'Public domain. Wikimedia Commons, File:Stevenson screen exterior.JPG.',
  href: 'https://commons.wikimedia.org/wiki/File:Stevenson_screen_exterior.JPG',
}

const koppen: ConceptFigure = {
  src: '/concepts/koppen.svg',
  alt: 'World map of Köppen–Geiger climate types.',
  caption: 'Köppen groups climates mainly by temperature and rainfall. A is tropical rainy, B is dry, C is mild mid-latitude, D is continental, and E is polar. Much of Pakistan falls in the dry group.',
  credit: 'Peel, Finlayson and McMahon, University of Melbourne; vector by Ali Zifan. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:World_K%C3%B6ppen_Classification.svg',
}

const elNino: ConceptFigure = {
  src: '/concepts/el-nino.svg',
  alt: 'Cross-section of the equatorial Pacific during El Niño, with the warm water shifted east and the thermocline flattened.',
  caption: 'In El Niño the warm surface water of the equatorial Pacific shifts east, the trade winds weaken, and the thermocline flattens. La Niña is the opposite swing: stronger trades and a colder eastern Pacific.',
  credit: 'Fred the Oyster, after NOAA. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:ENSO_-_El_Ni%C3%B1o.svg',
}

const milankovitch: ConceptFigure = {
  src: '/concepts/milankovitch.png',
  alt: 'Three orbital cycles: eccentricity, tilt and precession, plotted over hundreds of thousands of years.',
  caption: 'Milankovitch cycles are slow changes in Earth’s orbit and tilt. They alter how sunlight is spread between the seasons and are one reason ice ages come and go. They are far too slow to explain the warming of the last century.',
  credit: 'Robert A. Rohde, Global Warming Art. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Milankovitch_Variations.png',
}

const heatIsland: ConceptFigure = {
  src: '/concepts/urban-heat.svg',
  alt: 'Temperature trace from countryside through a city, rising over the built-up area.',
  caption: 'A city is often warmer than the countryside around it. Buildings, roads and heat from human activity make an urban heat island. The peak is usually over the dense centre.',
  credit: 'TheNewPhobia. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Urban_heat_island.svg',
}

const seasons: ConceptFigure = {
  src: '/concepts/seasons.svg',
  alt: 'Earth on its tilted axis at four points in the orbit, showing why the hemispheres have opposite seasons.',
  caption: 'The seasons come from the tilt of Earth’s axis, not from being closer to the Sun. When the Northern Hemisphere leans toward the Sun it is summer there and winter in the south.',
  credit: 'Rhcastilhos. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Seasons.svg',
}

const rainShadow: ConceptFigure = {
  src: '/concepts/rain-shadow.svg',
  alt: 'Moist air rising over a mountain, dropping rain on the windward side, and descending dry on the lee side.',
  caption: 'Moist air rises on the windward slope, cools, and drops orographic rain. It descends on the lee side warmer and drier. That dry side is the rain shadow.',
  credit: 'Kagee. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Rain_shadow.svg',
}

const rings: ConceptFigure = {
  src: '/concepts/tree-rings.jpg',
  alt: 'Close view of annual growth rings in a cut tree trunk.',
  caption: 'Each ring is a year of growth. A wide ring often means a favourable year. Rings, ice cores and similar natural records are climate proxies: evidence of climate from before thermometers.',
  credit: 'Arnoldius. CC BY-SA 2.5.',
  href: 'https://commons.wikimedia.org/wiki/File:Tree_rings.jpg',
}

const seismograph: ConceptFigure = {
  src: '/concepts/seismograph.png',
  alt: 'A seismograph: a suspended mass and a pen tracing the shaking of the ground.',
  caption: 'A seismograph records shaking. The instrument is the seismograph. The trace it draws is the seismogram. A heavy mass tends to stay still while the ground, and the drum, move.',
  credit: 'Pearson Scott Foresman. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Seismograph_(PSF).png',
}

const richter: ConceptFigure = {
  src: '/concepts/richter.jpg',
  alt: 'Diagram relating the Richter magnitude to the amplitude of the seismogram and the distance from the earthquake.',
  caption: 'Richter magnitude is read from how large the wave is on the seismogram, after allowing for how far the station is from the earthquake. It measures the size of the rupture. Intensity, on the Mercalli scale, measures the shaking at one place.',
  credit: 'Benjamin J. Burger. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:How-the-Richter-Magnitude-Scale-is-determined.jpg',
}

const tsunami: ConceptFigure = {
  src: '/concepts/tsunami.svg',
  alt: 'A tsunami generated at a fault under the sea, growing taller as it reaches shallow water.',
  caption: 'A tsunami is a set of sea waves set off when an earthquake, usually under the sea, suddenly shifts the water. In deep water the wave is low and fast. It grows tall as the water shoals near a coast.',
  credit: 'MesserWoland. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Tsunami.svg',
}

const volcano: ConceptFigure = {
  src: '/concepts/volcano.svg',
  alt: 'Cross-section of a volcano showing the magma chamber, the conduit and the cone.',
  caption: 'Magma is molten rock underground. Lava is that melt once it reaches the surface. A volcano is the opening, and often the cone, built where magma escapes. Most volcanoes sit on plate boundaries.',
  credit: 'MesserWoland. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Volcano_scheme.svg',
}

const folds: ConceptFigure = {
  src: '/concepts/folds.svg',
  alt: 'Cross-section of an anticline, where layers arch up, and a syncline, where they sag down.',
  caption: 'The arch is an anticline and the sag is a syncline. The words on this figure are Slovenian: antiklinale, sinklinala, and kamnina, which means rock. In an anticline the layers bend up. In a syncline they bend down.',
  credit: 'Velosqueak, after Tcie. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Syncline_and_anticline.svg',
}

const timeScale: ConceptFigure = {
  src: '/concepts/geologic-time.jpg',
  alt: 'The geologic time scale from the origin of Earth to the present, divided into eons, eras and periods.',
  caption: 'Geologic time is divided into eons, eras and periods. The scale is not evenly spaced in the picture of human history: almost all of Earth’s past is before the first animals.',
  credit: 'US Geological Survey. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Geologic_time_scale.jpg',
}

const soil: ConceptFigure = {
  src: '/concepts/soil.svg',
  alt: 'A soil profile with the organic topsoil over paler subsoil and weathered rock.',
  caption: 'Soil is produced mainly by the weathering of rock, plus organic matter. A profile shows the layers: organic-rich topsoil, a paler subsoil, and broken rock below.',
  credit: 'Tomáš Kebert and umimeto.org. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Soil_profile.svg',
}

const aquifer: ConceptFigure = {
  src: '/concepts/aquifer.svg',
  alt: 'Cross-section of an aquifer between less permeable layers, with the water table and a well.',
  caption: 'Water fills the pore spaces below the water table. The labels are Dutch: watertafel is the water table, onverzadigde zone is the unsaturated ground above it, and the arrows show the direction of groundwater flow.',
  credit: 'Hans Hillewaert. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Aquifer.svg',
}

const mohs: ConceptFigure = {
  src: '/concepts/mohs.svg',
  alt: 'The Mohs scale of mineral hardness from talc at 1 to diamond at 10.',
  caption: 'Mohs hardness is a scratch order, not a measured force. Talc is 1, quartz is 7, and diamond is 10. A harder mineral scratches a softer one.',
  credit: 'Zimbres. CC BY-SA 2.5.',
  href: 'https://commons.wikimedia.org/wiki/File:Knoop-and_Mohs-_scale.svg',
}

const waterCycle: ConceptFigure = {
  src: '/concepts/water-cycle.svg',
  alt: 'The water cycle: evaporation, condensation, precipitation, runoff and groundwater.',
  caption: 'Water evaporates, condenses into cloud, falls as precipitation, and returns by rivers and through the ground. The same water is used again. That circulation is the water cycle.',
  credit: 'NASA Precipitation Measurement Missions, drawn by j4p4n. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Water_cycle.svg',
}

const ozone: ConceptFigure = {
  src: '/concepts/ozone.png',
  alt: 'The ozone cycle: ultraviolet light splitting oxygen and ozone forming and breaking in the stratosphere.',
  caption: 'Ozone in the stratosphere absorbs ultraviolet light that would otherwise harm living things. That is a different problem from the greenhouse effect. The Montreal Protocol limited the gases that were thinning this layer.',
  credit: 'NASA; vector by Smartse. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Ozone_cycle.svg',
}

const acidRain: ConceptFigure = {
  src: '/concepts/acid-rain.png',
  alt: 'Sulphur dioxide and nitrogen oxides from combustion rising, forming acids, and falling in rain.',
  caption: 'Acid rain comes from sulphur dioxide and nitrogen oxides, released when some fuels burn. It is not caused by carbon dioxide. The acids form in the air and fall with rain.',
  credit: 'Public domain. Wikimedia Commons, File:Origins of acid rain.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Origins_of_acid_rain.svg',
}

const pyramid: ConceptFigure = {
  src: '/concepts/pyramid.png',
  alt: 'An ecological pyramid with producers at the base and fewer consumers at each step above.',
  caption: 'Producers, usually green plants, form the base. Herbivores eat them. Each step supports less living matter than the step below, which is why the picture is a pyramid.',
  credit: 'Saric. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Ecological_pyramid.svg',
}

const photosynthesis: ConceptFigure = {
  src: '/concepts/photosynthesis.png',
  alt: 'A leaf taking in carbon dioxide and water and releasing oxygen, using sunlight.',
  caption: 'Photosynthesis uses sunlight to build plant material from carbon dioxide and water, and it releases oxygen. The carbon dioxide taken in is the same gas the greenhouse questions are about.',
  credit: 'Marek M. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Photosynthesis.svg',
}

const biomagnification: ConceptFigure = {
  src: '/concepts/biomagnification.svg',
  alt: 'A pollutant becoming more concentrated from plankton up through fish to a bird.',
  caption: 'Bioaccumulation is the build-up of a pollutant in one organism. Biomagnification is the rise in concentration at each step of the food chain, so the top predator carries the most.',
  credit: 'Sballesteros15. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Biomagnification.svg',
}

const circuits: ConceptFigure = {
  src: '/concepts/circuits.png',
  alt: 'A series circuit with one path, and a parallel circuit with branches.',
  caption: 'In series there is one path, so the current is the same through each part. In parallel each branch has the same voltage. Ohm’s law for a metallic conductor is V = IR.',
  credit: 'Wikimedia Commons, File:Series and parallel circuits.svg. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Series_and_parallel_circuits.svg',
}

const buoyancy: ConceptFigure = {
  src: '/concepts/buoyancy.png',
  alt: 'An object in a liquid, with its weight downward and the buoyant force upward.',
  caption: 'A liquid pushes up on an object with a force equal to the weight of liquid displaced. The object floats if its average density is less than the density of the liquid.',
  credit: 'Yupi666; vector by Pbrks. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Buoyancy.svg',
}

const prism: ConceptFigure = {
  src: '/concepts/prism.png',
  alt: 'White light entering a prism and leaving as a spectrum of colours.',
  caption: 'A prism spreads white light into colours because each colour bends by a slightly different amount. That spreading is dispersion.',
  credit: 'Public domain. Wikimedia Commons, File:Prism.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Prism.svg',
}

const wavelength: ConceptFigure = {
  src: '/concepts/wavelength.png',
  alt: 'A wave labelled with its wavelength, from one crest to the next.',
  caption: 'Wavelength is the distance from one crest to the next. Frequency is how many crests pass a point each second, in hertz. Wave speed equals frequency times wavelength.',
  credit: 'Ysangkok. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Wavelength.svg',
}

const heatModes: ConceptFigure = {
  src: '/concepts/heat-transfer.jpg',
  alt: 'Conduction through a solid, convection by a moving fluid, and radiation across a gap.',
  caption: 'Conduction travels along the poker. Convection is the rising current above the fire. Radiation crosses the open gap to the hands. The figure also marks advection, heat carried along by the moving air itself.',
  credit: 'Kmecfiunit and cmglee. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Heat-transmittance-means2.jpg',
}

const pythagoras: ConceptFigure = {
  src: '/concepts/pythagoras.png',
  alt: 'A right triangle with squares drawn on each side, illustrating the Pythagorean theorem.',
  caption: 'In a right triangle the square on the hypotenuse equals the sum of the squares on the other two sides. If the short sides are 3 and 4, the long side is 5, because 9 + 16 = 25.',
  credit: 'Anynobody. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Pythagorean_theorem.svg',
}

const triangle: ConceptFigure = {
  src: '/concepts/triangle.png',
  alt: 'A triangle with its three interior angles marked.',
  caption: 'The three interior angles of any triangle add up to 180 degrees. A full turn is 360 degrees.',
  credit: 'User:4C. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Triangle.svg',
}

const rightAngle: ConceptFigure = {
  src: '/concepts/right-angle.svg',
  alt: 'A right angle, a quarter of a full turn, marked with the small square.',
  caption: 'A right angle is a quarter of a full turn, which is 90 degrees. The small square in the corner is the usual mark.',
  credit: 'Public domain. Wikimedia Commons, File:Right angle.svg.',
  href: 'https://commons.wikimedia.org/wiki/File:Right_angle.svg',
}

const numberLine: ConceptFigure = {
  src: '/concepts/number-line.png',
  alt: 'A number line with positive numbers to the right of zero and negative numbers to the left.',
  caption: 'On a number line, values increase to the right. A fall in pressure, from 1013 hPa to 998 hPa, is a move to the left of 15 hPa.',
  credit: 'Superborsuk. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Number_line.svg',
}

const barChart: ConceptFigure = {
  src: '/concepts/bar-chart.png',
  alt: 'A bar chart with separate bars for separate categories.',
  caption: 'A bar chart compares separate categories, such as rainfall at four stations. The height of the bar is the value. The gaps show that the categories are not a continuous sequence.',
  credit: 'Cuvwb. CC BY-SA 4.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Bar_chart.svg',
}

const lineGraph: ConceptFigure = {
  src: '/concepts/line-graph.png',
  alt: 'A line graph joining values in time order.',
  caption: 'A line graph is the usual picture of a quantity changing through time, such as temperature through the day or rainfall through the year. The line connects the observations in order.',
  credit: 'MathsPoetry. CC BY-SA 3.0.',
  href: 'https://commons.wikimedia.org/wiki/File:Line_graph.svg',
}

const stdev: ConceptFigure = {
  src: '/concepts/stdev.png',
  alt: 'A bell curve with the mean at the centre and bands one standard deviation to either side.',
  caption: 'The mean is the centre of this curve. The standard deviation measures the spread. Two sets can share a mean and still differ: the one with the larger standard deviation is more spread out.',
  credit: 'Oleg Alexandrov. Public domain.',
  href: 'https://commons.wikimedia.org/wiki/File:Standard_deviation.svg',
}

export const CONCEPTS: Record<string, ConceptTopic> = {
  meteorology: {
    title: 'Meteorology',
    intro: 'These are the pictures behind the professional paper: why the wind turns, how a humidity number is worked out, and how the large circulation is arranged.',
    items: [
      {
        title: 'Coriolis force',
        figure: coriolis,
        body: [
          'Earth rotates, so a moving parcel is deflected: to the right in the Northern Hemisphere and to the left in the Southern Hemisphere. The deflection is the Coriolis effect. It is not a force that starts the wind. The pressure-gradient force starts the wind, from high pressure toward low pressure.',
          'In the figure the blue arrows are that inward pull around a low. The red arrows are perpendicular to the motion. Together they make the air circle the low instead of falling straight in. Near the surface, friction slows the wind and the air does spiral inward.',
          'The effect is zero at the equator and strongest at the poles. It matters for large, long-lived winds. A sea breeze is too small and too brief for it to dominate.',
        ],
      },
      {
        title: 'Humidity from a pressure',
        figure: saturation,
        body: [
          'Relative humidity compares the water vapour that is present with the most the air can hold at that temperature. In pressures, RH = (actual vapour pressure ÷ saturation vapour pressure) × 100.',
          'Example of the sort of step an interview asks. Vapour pressure is 12 hPa. Saturation vapour pressure at the air temperature is 30 hPa. RH = 12 / 30 × 100 = 40 percent. If the air warms and the saturation value rises to 40 hPa while the vapour stays 12 hPa, RH falls to 30 percent. The air did not lose water. The ceiling got higher.',
          'The chart is that ceiling against temperature. It climbs steeply, which is why a warm day can hold much more vapour than a cold night, and why cooling air to its dew point produces cloud or fog.',
        ],
      },
      {
        title: 'The planetary circulation',
        figure: circulation,
        body: [
          'Heating is strongest near the equator, so air rises there, in the Intertropical Convergence Zone, and sinks in the subtropics. That overturning is the Hadley cell, and the sinking branch is why many hot deserts sit near 30 degrees latitude.',
          'Farther poleward, the Ferrel and polar cells and the prevailing westerlies organise the travelling lows of the mid-latitudes. Pakistan’s summer monsoon is a seasonal reversal on top of this pattern, not a separate planet-wide cell.',
        ],
      },
      {
        title: 'Layers of the atmosphere',
        figure: atmosphere,
        body: [
          'Almost all weather occurs in the troposphere. The boundary at its top is the tropopause. Above that, the stratosphere holds the ozone layer, which absorbs most harmful ultraviolet radiation.',
          'In the troposphere, temperature generally falls with height. The average environmental lapse rate is about 6.5°C per kilometre. A temperature inversion is a layer where temperature rises with height instead, and it caps rising air.',
        ],
      },
      {
        title: 'Lapse rates and stability',
        body: [
          'The dry adiabatic lapse rate is about 10°C per kilometre: that is how fast a rising unsaturated parcel cools. Once cloud forms, condensation releases latent heat, so the saturated adiabatic lapse rate is smaller.',
          'The atmosphere is conditionally unstable when the environmental lapse rate lies between those two. A dry parcel will not keep rising, but a saturated one will. That is the usual state of a showery afternoon.',
        ],
      },
      {
        title: 'Cloud types',
        figure: clouds,
        body: [
          'Cirrus clouds are high, thin and icy. Stratus is a low, featureless sheet. Cumulus is heaped. Cumulonimbus is the typical thunderstorm cloud, and it is where hail is produced.',
          'Cloud droplets form more readily when the air contains condensation nuclei, such as salt or dust. Radiation fog is most likely on a clear, calm night. Advection fog forms when moist air moves over a colder surface.',
        ],
      },
      {
        title: 'Fronts',
        figure: warmFront,
        body: [
          'A front is the boundary between two air masses. At a warm front, warm air rises over the retreating cold air and the rain is often steady. At a cold front, cold air advances and lifts the warm air more abruptly.',
          'An occluded front forms when the cold front catches the warm front and lifts the warm air off the ground. On a map the cold front is a blue line with triangles, the warm front a red line with semicircles.',
        ],
      },
      {
        title: 'The cloud along a cold front',
        figure: coldFront,
        body: [
          'The photograph is the steep cloud of a cold front. The passage often brings a veer of the wind, a fall then a rise of pressure, a drop in temperature, and a short spell of heavy rain.',
          'Behind the front the air is the cooler, denser air mass. Ahead of it, the air it is replacing is usually warmer and, in summer, more humid.',
        ],
      },
      {
        title: 'Air masses',
        figure: airMasses,
        body: [
          'A continental polar air mass is typically cold and dry. A maritime tropical air mass is typically warm and moist. Pakistan in winter is often under continental air, while the summer monsoon brings maritime tropical air from the Arabian Sea and the Bay of Bengal.',
          'Winter rain and snow over northern Pakistan are associated mainly with western disturbances, which are travelling lows in the westerlies, not with the summer monsoon.',
        ],
      },
      {
        title: 'The jet stream',
        figure: jet,
        body: [
          'The jet stream is a fast river of air near the tropopause. The polar-front jet lies above the boundary between cold and warm air, which is why it steers mid-latitude depressions.',
          'A westerly wind blows from the west. The mid-latitude jet is westerly in both hemispheres.',
        ],
      },
      {
        title: 'A tropical cyclone',
        figure: cyclone,
        body: [
          'Tropical cyclones draw most of their energy from the warm ocean, through evaporation and the later release of latent heat in the clouds. The eye of a mature storm is typically calm and comparatively clear, surrounded by the eyewall.',
          'They form over warm sea, away from the equator, where there is enough Coriolis effect to organise the rotation. They weaken quickly over land.',
        ],
      },
      {
        title: 'The monsoon',
        figure: monsoon,
        body: [
          'Monsoon means a seasonal reversal of the wind, not merely heavy rain. In summer the South Asian wind is onshore and wet. In winter it is offshore and dry.',
          'The map shows the usual march of the summer rains across the subcontinent. Eastern Pakistan receives most of its summer rainfall from this system. The peak months are July and August.',
        ],
      },
      {
        title: 'How the instruments are exposed',
        figure: screen,
        body: [
          'A barometer measures atmospheric pressure. An anemometer measures wind speed. A hygrometer measures humidity. A rain gauge measures rainfall amount. A Campbell–Stokes recorder measures sunshine.',
          'Standard mean sea-level pressure is about 1013 hPa. An isobar joins places of equal pressure. An isotherm joins places of equal temperature. Pressure generally falls with height, which is why a station reading is reduced to sea level before it is plotted.',
        ],
      },
    ],
    calculations: [
      {
        title: 'Humidity from a vapour pressure',
        given: 'The vapour pressure is 12 hPa. The saturation vapour pressure at that temperature is 30 hPa.',
        working: 'Relative humidity = (vapour pressure ÷ saturation vapour pressure) × 100 = 12 ÷ 30 × 100.',
        answer: '40 percent.',
      },
      {
        title: 'The same air, warmed',
        given: 'The vapour pressure stays 12 hPa. Warming raises the saturation vapour pressure to 40 hPa.',
        working: 'Relative humidity = 12 ÷ 40 × 100. The air did not lose water. The ceiling got higher.',
        answer: '30 percent.',
      },
      {
        title: 'Cooling with height',
        given: 'The surface is 30°C. The environmental lapse rate is 6.5°C per kilometre. Find the temperature 2 km up.',
        working: 'The drop is 6.5 × 2 = 13°C. Temperature aloft = 30 − 13.',
        answer: '17°C.',
      },
      {
        title: 'A dry parcel rising',
        given: 'Unsaturated air at 25°C rises 1 km. The dry adiabatic lapse rate is 10°C per kilometre.',
        working: 'It cools by 10°C. New temperature = 25 − 10.',
        answer: '15°C.',
      },
      {
        title: 'A fall on the barometer',
        given: 'The pressure was 1013 hPa. It is now 998 hPa.',
        working: 'The fall is 1013 − 998.',
        answer: '15 hPa.',
      },
    ],
  },
  climatology: {
    title: 'Climatology',
    intro: 'Climate is the long average, not one afternoon. The diagrams here are the greenhouse effect, the temperature record, and the carbon cycle. Those three are what climate-change questions are drawn from.',
    items: [
      {
        title: 'The greenhouse effect',
        figure: greenhouse,
        body: [
          'The surface absorbs sunlight and emits infrared radiation. Greenhouse gases, chiefly water vapour and carbon dioxide, absorb part of that infrared and radiate it back downward. The surface stays warmer than it would under an atmosphere that let all the infrared escape.',
          'This effect is natural and necessary. The change under discussion is the strengthening of it. Extra carbon dioxide from fossil fuels and land-use change means more infrared is intercepted, so the long-term average temperature rises.',
          'A single hot afternoon is weather. A shift in the 30-year average, and in how often extremes occur, is climate change.',
        ],
      },
      {
        title: 'The temperature record',
        figure: anomaly,
        body: [
          'An anomaly is the difference from a chosen long-term average. Plotting anomalies, rather than the raw temperature, makes the change easy to see from year to year.',
          'The chart is a global land-and-ocean index. The recent decades sit above the earlier average. That is the observation. The greenhouse strengthening above is the main physical reason.',
        ],
      },
      {
        title: 'Where the extra carbon goes',
        figure: carbon,
        body: [
          'Plants, soils and the ocean already exchange carbon with the air. Burning coal, oil and gas moves carbon that had been stored underground into that exchange, as carbon dioxide.',
          'The ocean and the land take up a share of the extra carbon dioxide. The rest stays in the air and is measured as the rising concentration. Questions often ask you to separate this human addition from the natural exchanges that were already running.',
        ],
      },
      {
        title: 'Köppen’s climate types',
        figure: koppen,
        body: [
          'A climatic normal is commonly based on about 30 years. Climate is that long average. A single hot afternoon is weather.',
          'In Köppen, A is tropical rainy, B is dry, C is temperate, D is continental with a cold winter, and E is polar. A desert is a B climate in which rainfall is too small for the temperature. A steppe is the less extreme dry climate next to it. A Mediterranean climate, a kind of C, typically has dry summers and wet winters.',
        ],
      },
      {
        title: 'El Niño and La Niña',
        figure: elNino,
        body: [
          'El Niño is a climate pattern linked to unusually warm water in the central and eastern equatorial Pacific, and to weaker trade winds. La Niña is, in broad terms, the opposite: a colder eastern Pacific and stronger trades.',
          'The effects reach far from the Pacific. That distant link is a teleconnection. A climate proxy, such as a coral or a tree ring, is how these swings are traced for years before the instrumental record.',
        ],
      },
      {
        title: 'Why the seasons change',
        figure: seasons,
        body: [
          'The seasons are caused mainly by the tilt of Earth’s axis. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere.',
          'A place high on a mountain is generally cooler. Aspect means which way a slope faces: a south-facing slope in Pakistan receives more direct sun than a north-facing one.',
        ],
      },
      {
        title: 'The slow orbital cycles',
        figure: milankovitch,
        body: [
          'Milankovitch cycles refer to changes in the shape of the orbit, the tilt of the axis, and the slow wobble of that axis. They pace the ice ages.',
          'An ice age is a long interval with large ice sheets, not one cold winter. These orbital changes do not account for the rapid rise on the temperature chart above.',
        ],
      },
      {
        title: 'The urban heat island',
        figure: heatIsland,
        body: [
          'The urban heat island means that a city is often warmer than the rural area around it, especially at night. Stone, asphalt and waste heat hold the warmth.',
          'A clear dry night tends to be colder than a cloudy night in the countryside, because the surface can radiate heat away. Cloud, and the city, both reduce that cooling.',
        ],
      },
      {
        title: 'Rain shadow and orographic rain',
        figure: rainShadow,
        body: [
          'Orographic rain is caused mainly by air being forced to rise over high ground. A rain shadow is the dry area on the lee side.',
          'Continentality is strongest in the interior of a large land mass, far from the moderating sea. A maritime climate, at a similar latitude, usually has a smaller annual temperature range. The diurnal temperature range is the difference between the day’s highest and lowest temperature.',
        ],
      },
      {
        title: 'Reading climate from tree rings',
        figure: rings,
        body: [
          'Paleoclimatology is the study of past climate. Tree rings can indicate it because growth depends on the warmth and the moisture of that year. Ice cores and lake sediments are other proxies.',
          'The cryosphere is the frozen part of the Earth: ice sheets, glaciers, snow and sea ice. Ice and snow raise the albedo, so they reflect sunlight and help keep a cold region cold. That is a positive feedback: a process that strengthens the change that started it.',
        ],
      },
      {
        title: 'Albedo and the deserts near 30 degrees',
        body: [
          'Albedo is the fraction of sunlight a surface reflects. Fresh snow has a high albedo. A dark wet field has a low one. Sea ice affects climate partly by raising the albedo of the ocean.',
          'Many of the world’s hot deserts lie near 30 degrees latitude because that is where the Hadley cell sinks. The main reason those subtropical deserts are dry is this descending, warming air, not a local lack of rivers. Much of Pakistan’s climate can be described as arid or semi-arid, with the summer monsoon as the main exception in the east.',
        ],
      },
    ],
    calculations: [
      {
        title: 'A temperature anomaly',
        given: 'July averages 27°C. The long-term July normal is 24°C.',
        working: 'Anomaly = this value − the normal = 27 − 24.',
        answer: '+3°C. The month was warmer than the normal.',
      },
      {
        title: 'The annual temperature range',
        given: 'The warmest month averages 35°C. The coldest averages 8°C.',
        working: 'Range = warmest − coldest = 35 − 8.',
        answer: '27°C. A large range is a sign of a continental climate.',
      },
      {
        title: 'The daily range',
        given: 'The afternoon high is 34°C. The night low is 19°C.',
        working: 'Diurnal range = 34 − 19.',
        answer: '15°C.',
      },
      {
        title: 'How much of the year’s rain is the monsoon',
        given: 'Annual rainfall is 400 mm. The summer monsoon months bring 280 mm.',
        working: 'Share = 280 ÷ 400 × 100.',
        answer: '70 percent of the year’s rain.',
      },
    ],
  },
  seismology: {
    title: 'Seismology',
    intro: 'Seismology questions are read off diagrams: which wave is which, where the focus sits, why part of the Earth is in shadow, and how the blocks of a fault move.',
    items: [
      {
        title: 'P waves, S waves and surface waves',
        figure: waves,
        body: [
          'P, or primary, waves are compressional. They travel through solids and liquids and they arrive first. S, or secondary, waves shear the rock. They are slower, and they cannot pass through liquid.',
          'Surface waves travel along the outer part of the Earth. They are often the ones that damage buildings. On a seismogram the order is P, then S, then the surface waves. The gap between P and S grows with distance from the earthquake.',
        ],
      },
      {
        title: 'Focus and epicentre',
        figure: epicenter,
        body: [
          'The focus is the place in the Earth where the rupture begins. The epicentre is the map point directly above it. Magnitude describes the size of the rupture. Intensity describes the shaking at a particular place, so it changes from town to town while the magnitude does not.',
          'A shallow focus under a city can be destructive even when the magnitude is moderate, because the waves have not had far to weaken.',
        ],
      },
      {
        title: 'Why S waves leave a shadow',
        figure: shadow,
        body: [
          'The outer core is liquid. S waves cannot cross it, so stations on the far side of the Earth record no S wave. That absence is the S-wave shadow zone, and it is the classic evidence that the outer core is molten.',
          'P waves do cross the outer core, but they bend. They leave a ring-shaped zone where direct P waves are also missing. The solid inner core was later inferred from waves that had passed through the centre.',
        ],
      },
      {
        title: 'How the fault moves',
        figure: faults,
        body: [
          'An earthquake is sudden slip on a fault. In a strike-slip fault the blocks slide horizontally. In a normal fault the crust is pulled apart and the upper block drops. In a reverse fault the crust is squeezed and the upper block is pushed up.',
          'Northern Pakistan sits on the collision of India with Eurasia, so the faults of the north are mostly the compressional kind, and the earthquakes are shallow enough to be felt strongly.',
        ],
      },
      {
        title: 'The seismograph and the seismogram',
        figure: seismograph,
        body: [
          'A seismograph is the instrument. A seismogram is the record it writes. The mass stays nearly still by inertia while the frame, fixed to the ground, shakes. The pen traces that relative motion.',
          'Body waves include P and S. Surface waves travel along the outer part of the Earth and are often the ones that damage buildings. On the trace the order is P, then S, then the surface waves.',
        ],
      },
      {
        title: 'Magnitude and intensity',
        figure: richter,
        body: [
          'The Richter scale is a measure of magnitude, the size of the earthquake at its source. The Mercalli scale describes intensity, the shaking and damage at a particular place.',
          'Magnitude does not change from town to town. Intensity does. A shallow-focus earthquake has its focus within a few tens of kilometres of the surface, so the intensity nearby can be high even when the magnitude is moderate.',
        ],
      },
      {
        title: 'How an epicentre is located',
        body: [
          'The lag between P and S arrivals increases when the station is farther from the earthquake. One station gives a distance, which is a circle on the map. Locating an epicentre commonly needs records from at least three stations. The epicentre is where the circles meet.',
          'A foreshock is a smaller earthquake before the main shock. The main shock is the largest of the sequence. Aftershocks are the smaller earthquakes that follow it, on and near the same rupture.',
        ],
      },
      {
        title: 'A tsunami',
        figure: tsunami,
        body: [
          'A tsunami is a series of long ocean waves, not a single wind wave and not a tidal bore. An earthquake under the sea is especially hazardous when it shifts the seafloor vertically and so displaces the water.',
          'In the open ocean the wave may be less than a metre high and can pass under a ship unnoticed. The danger is at the coast, where the wave slows and the water piles up.',
        ],
      },
      {
        title: 'Where most earthquakes occur',
        figure: plates,
        body: [
          'Most earthquakes occur along plate boundaries. A mid-ocean ridge is a place where plates move apart. A subduction zone is where one plate sinks beneath another. The Himalayas are associated with the collision of the Indian plate with Eurasia.',
          'The interior of a plate is comparatively quiet. A transform boundary, where plates slide past each other, produces strike-slip earthquakes.',
        ],
      },
      {
        title: 'What the shadow zone proved',
        body: [
          'Seismic waves have shown that Earth’s outer core is liquid because S waves do not cross it. P waves do, and they bend, which is why there is also a P-wave shadow.',
          'The same records separate the crust, the mantle and the core. Seismology is how the layered Earth in the geology section was first measured, rather than only imagined.',
        ],
      },
    ],
    calculations: [
      {
        title: 'The gap between P and S',
        given: 'The P wave arrives at 10:00:12. The S wave arrives at 10:00:20.',
        working: 'Lag = S time − P time = 20 − 12 seconds.',
        answer: '8 seconds. A station with a larger gap is farther from the earthquake.',
      },
    ],
  },
  geology: {
    title: 'Basic Geology',
    intro: 'Geology on this paper is the structure of the Earth, the rock cycle, and the plates. The same pictures carry the questions: name the layer, name the arrow, name the boundary.',
    items: [
      {
        title: 'Inside the Earth',
        figure: layers,
        body: [
          'The crust is thin. Oceanic crust is thinner and denser than continental crust, and it is mostly basalt, while continents carry a great deal of granite. Under the crust is the mantle, which is solid but can flow very slowly.',
          'The outer core is liquid iron, which is why S waves stop there. The inner core is solid iron. The lithosphere, crust plus the rigid top of the mantle, is what the plates are made of.',
        ],
      },
      {
        title: 'The rock cycle',
        figure: rocks,
        body: [
          'Molten rock cools into igneous rock. Slow cooling underground gives large crystals, as in granite. Fast cooling at the surface gives fine grains, as in basalt.',
          'Weathering and erosion make sediment, and sediment hardens into sedimentary rock. Fossils are found there, because the heat of magma would destroy them. Heat and pressure without complete melting turn an older rock into a metamorphic rock: limestone becomes marble, shale becomes slate.',
        ],
      },
      {
        title: 'Plates',
        figure: plates,
        body: [
          'At a divergent boundary the plates move apart and new oceanic crust forms, as at a mid-ocean ridge. At a convergent boundary they move together. Oceanic crust can sink, which is subduction, or two continents can collide, which is how the Himalayas are still rising.',
          'A transform boundary is sideways slip, like a strike-slip fault at plate scale. Most earthquakes and volcanoes follow these lines rather than the quiet interiors of the plates.',
        ],
      },
      {
        title: 'Faults in the crust',
        figure: faults,
        body: [
          'Folding bends layers while they are still able to flex. Faulting breaks them. The upper side of a sloping fault is the hanging wall and the lower side is the footwall. Hanging wall down is a normal fault. Hanging wall up is a reverse fault.',
          'In an undisturbed pile of sedimentary beds the youngest bed is on top. A gap where erosion or missing time interrupts the pile is an unconformity.',
        ],
      },
      {
        title: 'Folds',
        figure: folds,
        body: [
          'An anticline is a fold in which the layers arch upward. A syncline is a fold in which the layers sag downward. In an eroded anticline the oldest rocks appear in the middle. In an eroded syncline the youngest rocks appear in the middle.',
          'Folding of rocks is evidence of compression. The Himalayas are geologically young mountains formed by India colliding with Eurasia, and both folds and reverse faults are part of that collision.',
        ],
      },
      {
        title: 'A volcano',
        figure: volcano,
        body: [
          'Magma is molten rock that is still underground. Lava is magma that has reached the surface. An intrusive igneous rock cools slowly underground and can grow large crystals. An extrusive rock cools quickly and stays fine-grained.',
          'Granite is a typical rock of the continental crust. Basalt is a common rock of the ocean floor. Most volcanoes occur near plate boundaries, especially where a plate is subducted.',
        ],
      },
      {
        title: 'Minerals, rocks and the Mohs scale',
        figure: mohs,
        body: [
          'A mineral is a naturally occurring solid with a definite chemical composition and an ordered internal structure. A rock is a mixture of minerals, or sometimes of one mineral in a mass. Quartz is a mineral. Granite is a rock.',
          'The hardest mineral on the Mohs scale is diamond, at 10. Talc is the soft end and has hardness 1. Quartz has a Mohs hardness of 7. The scale only says which mineral scratches which.',
        ],
      },
      {
        title: 'Weathering, erosion and soil',
        figure: soil,
        body: [
          'Weathering is the breakdown of rock in place. Erosion is the removal of that material. Frost shattering is a form of physical weathering. Chemical weathering includes solution, as when rainwater dissolves limestone.',
          'A glacier erodes mainly by plucking and abrasion. Soil is produced mainly by weathering plus the addition of organic matter. A sedimentary layer is called a bed, or stratum.',
        ],
      },
      {
        title: 'Groundwater',
        figure: aquifer,
        body: [
          'Groundwater is water that occupies pores and fractures below the surface. An aquifer is a rock or sediment body that stores it and allows it to move. Permeability is that ease of movement. A clay layer can be porous and still nearly impermeable.',
          'Alluvium is the sediment deposited by a river. A delta forms where a river drops that load as it enters a standing body of water, such as the sea.',
        ],
      },
      {
        title: 'Geologic time',
        figure: timeScale,
        body: [
          'The geologic time scale orders Earth’s history into eons, eras and periods. The names on the chart are the ones used for the age of a rock or a fossil.',
          'In an undisturbed sequence the youngest sedimentary layer is on top. That is the principle of superposition. An unconformity is a surface where time is missing, because of erosion or because no sediment was laid down.',
        ],
      },
      {
        title: 'The three rock families, named',
        body: [
          'Igneous rocks form from the cooling of magma or lava. Sedimentary rocks form from sediment, or from material precipitated from water. Limestone is often formed from the shells and skeletons of marine organisms. Sandstone is a sedimentary rock made of sand grains.',
          'Metamorphic rocks form when existing rocks are changed by heat and pressure without fully melting. Marble is the metamorphic form of limestone. Slate forms by metamorphism of shale. Fossils are found mainly in sedimentary rocks.',
        ],
      },
    ],
  },
  environment: {
    title: 'Environmental Studies',
    intro: 'The environmental paper uses the same physical pictures as climate, then asks what people add and what can be done about it.',
    items: [
      {
        title: 'Greenhouse gases',
        figure: greenhouse,
        body: [
          'The natural greenhouse effect keeps Earth habitable. The enhanced effect is the extra warming from gases added by human activity, above all carbon dioxide from fossil fuels, and also methane.',
          'Mitigation reduces the emissions. Adaptation adjusts life and infrastructure to the change that is already underway. A question that offers both words is asking for that distinction.',
        ],
      },
      {
        title: 'The carbon stores',
        figure: carbon,
        body: [
          'A forest or an ocean that takes up more carbon than it releases is a sink. Cutting the forest, or burning the coal, moves that carbon into the air.',
          'Deforestation tends to release stored carbon, expose soil, and increase soil erosion. Afforestation means planting forest where there was none, or where it had been removed. A national park is mainly intended to protect habitat and species.',
        ],
      },
      {
        title: 'The water cycle',
        figure: waterCycle,
        body: [
          'Ecology is the study of organisms and their environment. An ecosystem includes the living community and the non-living surroundings. The water cycle is the path water takes through both.',
          'Groundwater is water beneath the surface. An aquifer stores it. Potable water is water that is safe to drink. Water scarcity means there is not enough usable water for the people and the uses that depend on it.',
        ],
      },
      {
        title: 'The ozone layer',
        figure: ozone,
        body: [
          'The ozone layer is important because it absorbs most of the Sun’s harmful ultraviolet radiation. The gases that thinned it are not the same as the main greenhouse gases.',
          'The Montreal Protocol is mainly concerned with those ozone-depleting substances. The Kyoto Protocol and the Paris Agreement deal mainly with climate and greenhouse gases. Mixing those three treaties is a common trap.',
        ],
      },
      {
        title: 'Acid rain',
        figure: acidRain,
        body: [
          'Acid rain is associated with sulphur dioxide and nitrogen oxides from burning fossil fuels, especially coal, and from some industrial processes. Carbon dioxide makes rain slightly acidic, but it is not what the term acid rain refers to.',
          'Smog is polluted air made visible, often a mix of smoke and fog or of sunlight acting on exhaust gases. Particulate matter is the solid and liquid particles suspended in that air.',
        ],
      },
      {
        title: 'Who eats whom',
        figure: pyramid,
        body: [
          'In a food chain, producers are usually green plants. A herbivore eats plants. A carnivore eats other animals. Decomposers are important because they return nutrients from dead material to the soil.',
          'Biodiversity means the variety of life: of genes, of species and of ecosystems. An endangered species is one that is at serious risk of disappearing. Carrying capacity is the largest population an environment can support over time.',
        ],
      },
      {
        title: 'Photosynthesis',
        figure: photosynthesis,
        body: [
          'Photosynthesis in green plants uses sunlight, carbon dioxide and water. The main gas taken in is carbon dioxide. Oxygen is released.',
          'A wetland is valuable partly because it can store water, support wildlife and trap some pollutants. Removing it removes those services as well as the habitat.',
        ],
      },
      {
        title: 'Biomagnification',
        figure: biomagnification,
        body: [
          'Bioaccumulation means a pollutant builds up in one organism faster than the organism can get rid of it. Biomagnification means the concentration rises further at each step of the food chain.',
          'The top predator, including people who eat that predator, receives the highest dose. A question that offers both words is asking for that difference of scale: one body, or the whole chain.',
        ],
      },
      {
        title: 'Mitigation and adaptation',
        body: [
          'Climate mitigation means reducing the causes, chiefly by cutting greenhouse-gas emissions. Climate adaptation means adjusting to the change that is already happening, for example by changing crops or raising flood defences.',
          'A renewable energy source is replaced on a human timescale: sunlight, wind, flowing water. Coal and petroleum are non-renewable. Sustainable development aims to meet present needs without closing off the same possibility for later generations.',
        ],
      },
      {
        title: 'Pollution and waste',
        body: [
          'Point-source pollution comes from a single identifiable place, such as a pipe. Non-point-source pollution is spread out, such as fertiliser washed off many fields. Eutrophication of a lake is often caused by that nutrient runoff, which feeds algae and then depletes the oxygen.',
          'Biodegradable waste can be broken down by living organisms. The three R’s of waste management begin with reduce, then reuse, then recycle. Composting is the managed rotting of organic waste into a soil conditioner. Noise pollution is unwanted sound at a level that harms health or peace.',
        ],
      },
      {
        title: 'Desertification and the assessment of a project',
        body: [
          'Desertification is the degradation of dry land until it can no longer support the vegetation it once did. Overgrazing, deforestation and a drying climate can all contribute.',
          'An environmental impact assessment is a study, before a project is approved, of the harm it may do and of how that harm can be limited. It is not itself a law against building. It is the evidence the decision is meant to rest on.',
        ],
      },
    ],
    calculations: [
      {
        title: 'A cut in emissions',
        given: 'A source emits 500 units of carbon dioxide a year and cuts that by 10 percent.',
        working: 'The cut is 10 percent of 500, which is 50. The new total is 500 − 50.',
        answer: '450 units a year. That cut is mitigation.',
      },
      {
        title: 'How much forest is left',
        given: 'A reserve is 100 units of forest. Twenty percent is cleared.',
        working: 'Cleared = 20. Remaining = 100 − 20.',
        answer: '80 units remain. The cleared share is the part that stops storing carbon.',
      },
    ],
  },
  physics: {
    title: 'Basics of Physics',
    intro: 'The physics on this paper is first-year relations you can say in one sentence, plus the spectrum that satellite meteorology actually uses.',
    items: [
      {
        title: 'The spectrum satellites use',
        figure: spectrum,
        body: [
          'Visible light is what a cloud picture in daylight uses. Infrared is heat radiation, so an infrared satellite image can be made at night and shows cloud-top temperature. Microwaves are used in some sounders because they can see through cloud.',
          'Shorter wavelength means higher frequency for the same wave speed, because speed = frequency × wavelength.',
        ],
      },
      {
        title: 'Waves',
        figure: wavelength,
        body: [
          'The frequency of a wave is the number of crests passing a point each second. The unit is the hertz. A wave’s wavelength is the distance from one crest to the next.',
          'Wave speed equals frequency times wavelength. Sound needs a material to travel through. Light can travel through empty space. An echo is sound reflected from a surface.',
        ],
      },
      {
        title: 'How heat moves',
        figure: heatModes,
        body: [
          'Heat and temperature differ because heat is energy in transit, while temperature is a measure of how hot something is. Conduction is heat transfer through a material without the material itself travelling. Convection transfers heat mainly by the movement of a fluid. Heat can travel through empty space by radiation.',
          'Specific heat capacity is the heat needed to raise the temperature of a unit mass by one degree. Latent heat is the heat absorbed or released during a change of state, with no change of temperature. Evaporation is the change from liquid to vapour at the surface. Condensation releases latent heat.',
        ],
      },
      {
        title: 'White light and a prism',
        figure: prism,
        body: [
          'White light passed through a prism is dispersed into a spectrum of colours. Each colour has a different wavelength, so each bends by a different amount.',
          'A convex lens can converge light to a focus. That is a different job from a prism, which spreads colours rather than gathering them to a point.',
        ],
      },
      {
        title: 'Series and parallel circuits',
        figure: circuits,
        body: [
          'Ohm’s law for a metallic conductor is V = IR. The unit of electric current is the ampere. The unit of electric resistance is the ohm.',
          'In a series circuit, the current is the same through each part. In a parallel circuit, the voltage across each branch is the same. A conductor differs from an insulator because a conductor lets charge move through it readily.',
        ],
      },
      {
        title: 'Floating and sinking',
        figure: buoyancy,
        body: [
          'Density is mass divided by volume. An object floats in a liquid when its average density is less than the density of the liquid. The upward force is the weight of the liquid displaced.',
          'Mass is the amount of matter and does not change if you carry it to the Moon. Weight is the gravitational pull, so it does. The SI unit of mass is the kilogram. The SI unit of force, including weight, is the newton.',
        ],
      },
      {
        title: 'Pressure, work and power',
        body: [
          'Pressure is force divided by area. The SI unit of pressure is the pascal. Work is done when a force moves its point of application. The unit of energy, and of work, is the joule. Power is the rate of doing work, in watts.',
          'The acceleration due to gravity near Earth’s surface is about 9.8 m/s², often taken as 10 m/s² in a one-step sum. Kinetic energy is the energy of motion. Gravitational potential energy increases when an object is raised.',
        ],
      },
      {
        title: 'Newton’s laws',
        body: [
          'Speed is distance divided by time, with no direction. Velocity differs from speed because velocity also includes direction. Newton’s first law says that an object keeps a constant velocity unless a resultant force acts on it.',
          'Newton’s second law can be written as force equals mass times acceleration. Momentum is mass times velocity. Friction is a force that opposes sliding. Like magnetic poles repel. The north pole of a magnet attracts a south pole.',
        ],
      },
      {
        title: 'The gas laws and the fixed points of water',
        body: [
          'Boyle’s law says that, at constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume. Charles’s law says that, at constant pressure, the volume of a fixed mass of gas is proportional to its absolute temperature.',
          'Absolute zero is the zero of the kelvin scale, about −273°C. A temperature of 0°C is about 273 K. The freezing point of pure water at standard pressure is 0°C. The boiling point of pure water at standard sea-level pressure is 100°C.',
        ],
      },
      {
        title: 'The units that get swapped',
        body: [
          'The SI unit of force is the newton, of energy the joule, of power the watt, of pressure the pascal, of frequency the hertz, of current the ampere, and of resistance the ohm. The SI unit of mass is the kilogram.',
          'Weight is a force, so a careful answer gives it in newtons. Mass stays in kilograms. Speed has no direction. Velocity does.',
        ],
      },
    ],
    calculations: [
      {
        title: 'Pressure from force and area',
        given: 'A force of 200 newtons acts on an area of 0.5 square metres.',
        working: 'Pressure = force ÷ area = 200 ÷ 0.5.',
        answer: '400 pascals.',
      },
      {
        title: 'Current from Ohm’s law',
        given: 'The voltage is 12 volts. The resistance is 4 ohms.',
        working: 'V = IR, so current = V ÷ R = 12 ÷ 4.',
        answer: '3 amperes.',
      },
      {
        title: 'Density, and whether it floats',
        given: 'A specimen has mass 250 g and volume 100 cm³. Water is about 1 g/cm³.',
        working: 'Density = mass ÷ volume = 250 ÷ 100.',
        answer: '2.5 g/cm³. It is denser than water, so it sinks.',
      },
      {
        title: 'Wave speed',
        given: 'The frequency is 5 hertz. The wavelength is 2 metres.',
        working: 'Speed = frequency × wavelength = 5 × 2.',
        answer: '10 metres per second.',
      },
      {
        title: 'Celsius to kelvin',
        given: 'The air temperature is 27°C. Absolute zero is about −273°C, so kelvin = Celsius + 273.',
        working: '27 + 273.',
        answer: '300 K. A temperature of 0°C is about 273 K.',
      },
    ],
  },
  mathematics: {
    title: 'Basic Mathematics',
    intro: 'The sums are one step. The trap is reading the sentence carefully, not finding a clever method.',
    items: [
      {
        title: 'Percent and average',
        body: [
          'A percent is a fraction of 100. Fifteen percent of 200 is 0.15 × 200 = 30. Increasing 50 by 20 percent is 50 × 1.20 = 60, which is not the same as adding 20.',
          'The mean is the sum divided by how many numbers there are. The median is the middle value after sorting. The mode is the value that appears most often. A single very large number pulls the mean and leaves the median where it was.',
        ],
      },
      {
        title: 'Order of operations',
        body: [
          'Multiply and divide before you add and subtract. So 15 − 3 × 2 is 15 − 6 = 9, not 24. A rainfall total of “10 mm on each of 4 days, then 5 mm” is 10 × 4 + 5.',
          'The product of any number and 0 is 0. Half of 86 is 43. Three quarters of 80 is 60, because one quarter is 20.',
        ],
      },
      {
        title: 'A right angle and the angles of a triangle',
        figure: rightAngle,
        body: [
          'A right angle measures 90 degrees. The sum of the angles in a triangle is 180 degrees.',
          'A square of side 6 cm has a perimeter of 24 cm, four times the side. A rectangle 5 m by 8 m has an area of 40 square metres, length times width.',
        ],
      },
      {
        title: 'The Pythagorean theorem',
        figure: pythagoras,
        body: [
          'On a right triangle, the square of the longest side equals the sum of the squares of the other two. The 3–4–5 triangle is the one to remember: 9 + 16 = 25, and the square root of 25 is 5.',
          'The square root of 81 is 9, because 9 times 9 is 81. The next square after 25 is 36, which is 6 squared. That is the pattern in the series 1, 4, 9, 16, 25.',
        ],
      },
      {
        title: 'The three angles',
        figure: triangle,
        body: [
          'Whatever the shape of the triangle, the interior angles still add to 180 degrees. If two angles are 60 and 40, the third is 80.',
          'A prime number has no factors other than 1 and itself. 11 is prime. 4, 6 and 9 are not. An even number is divisible by 2.',
        ],
      },
      {
        title: 'Reading a change on the number line',
        figure: numberLine,
        body: [
          'A barometer that falls from 1013 hPa to 998 hPa has dropped by 15 hPa. Subtraction is the distance between the two marks.',
          'A temperature rise from 18°C to 27°C is 9 degrees. A pressure that falls by 2 hPa each hour for 6 hours falls by 12 hPa in all.',
        ],
      },
      {
        title: 'Ratio, speed and powers',
        body: [
          'In a 30-day month the ratio of rainy days to dry days is 2:3. The parts are 5, so each part is 6 days, and the rainy days are 12. A vehicle that travels 120 km in 2 hours has an average speed of 60 km/h.',
          '2 to the power 5 is 32, because the doublings run 2, 4, 8, 16, 32. The least common multiple of 4 and 6 is 12. 2.5 kilometres is 2500 metres. 1000 metres is 1 kilometre. 3 hours and 20 minutes is 200 minutes.',
        ],
      },
      {
        title: 'Percent again, the way the paper phrases it',
        body: [
          'A value that rises from 200 to 250 has increased by 50, which is 25 percent of the original 200. Forty-five is 50 percent of 90. A pressure of 1000 hPa increased by 1 percent becomes 1010 hPa.',
          'If x + 7 = 15, then x is 8. One half plus one quarter is three quarters. Two fifths of 100 is 40. Rainfall of 30 mm that doubles becomes 60 mm.',
        ],
      },
      {
        title: 'A bar chart',
        figure: barChart,
        body: [
          'Bars compare separate things: four stations, four months, four categories. Read the height against the scale. Do not assume the bars are in time order unless the labels say so.',
          'Eight stations each recording an average of 12 mm have a combined total of 96 mm. The average of 6, 6 and 6 is 6. A zero in a rainfall total still belongs in the list, and it adds nothing.',
        ],
      },
      {
        title: 'A line through time, and a map scale',
        figure: lineGraph,
        body: [
          'A line graph is for a sequence. Daily temperature, or a pressure trace, belongs on a line. Reading between two plotted points is interpolation. Extending the line past the last point is extrapolation, and it is a guess.',
          'On a map, 1 cm represents 5 km. A line of 4 cm represents 20 km. Four pencils that cost 80 cost 20 each. The next term in 5, 10, 20, 40 is 80, because each term is doubled. The next term in 2, 6, 18, 54 is 162, because each term is multiplied by 3.',
        ],
      },
    ],
    calculations: [
      {
        title: 'A percent of a number',
        given: 'Find 25 percent of 640.',
        working: '25 percent is one quarter. 640 ÷ 4.',
        answer: '160.',
      },
      {
        title: 'An average',
        given: 'Four daily rainfall readings are 12 mm, 18 mm, 25 mm and 9 mm.',
        working: 'Total = 12 + 18 + 25 + 9 = 64. Mean = 64 ÷ 4.',
        answer: '16 mm a day.',
      },
      {
        title: 'Multiply before you subtract',
        given: 'Find 15 − 3 × 2.',
        working: '3 × 2 = 6 first. Then 15 − 6.',
        answer: '9. It is not 24.',
      },
      {
        title: 'A map distance',
        given: 'The scale says 1 cm represents 5 km. The line on the map is 4 cm.',
        working: '4 × 5.',
        answer: '20 km.',
      },
      {
        title: 'A percentage increase',
        given: 'A value rises from 200 to 250.',
        working: 'The increase is 50. As a percent of the original, 50 ÷ 200 × 100.',
        answer: '25 percent.',
      },
    ],
  },
  research: {
    title: 'Research and Analysis',
    intro: 'This paper asks whether you can tell a fair test from a misleading one. The cycle in the figure is the whole syllabus in one picture.',
    items: [
      {
        title: 'The cycle of a study',
        figure: method,
        body: [
          'Start with a question that evidence can answer. A hypothesis is a proposed answer, stated so that it could turn out to be wrong. The independent variable is the one you change. The dependent variable is the one you measure. Everything else you can hold steady is a control.',
          'A sample is the part you actually observe. A census tries to include everyone. A sample that systematically misses one kind of case is biased, however large it is.',
        ],
      },
      {
        title: 'A hypothesis has to be able to fail',
        body: [
          'The first step of a typical investigation is to ask a question that evidence can answer. A hypothesis is a proposed answer, stated so that a result could show it to be wrong.',
          'The scientific attitude to a favoured hypothesis is that it should be tested, not protected. A conclusion that cannot be wrong, whatever the data, is not a hypothesis.',
        ],
      },
      {
        title: 'Spread around the mean',
        figure: stdev,
        body: [
          'The mean is the sum divided by the count. The median is the middle value after sorting. The mode is the value that appears most often. The range is the largest value minus the smallest.',
          'Standard deviation measures the spread about the mean. If two data sets have the same mean but one has a larger standard deviation, that set is more spread out. An outlier is a value far from the rest. It pulls the mean and barely moves the median.',
        ],
      },
      {
        title: 'Bars, lines and a scatter of points',
        figure: barChart,
        body: [
          'A bar chart is suitable for separate categories. A line graph is often used to show change through time. A time series is a sequence of observations in time order. A moving average is used to smooth that sequence so the trend is easier to see.',
          'In a graph of rainfall against month, the dependent variable is usually the rainfall, drawn on the vertical axis. The month, which you are not changing by the measurement, goes along the horizontal axis. A scatter plot is used to look for a relationship between two measured quantities.',
        ],
      },
      {
        title: 'A line through time',
        figure: lineGraph,
        body: [
          'Interpolation is estimating a value between two observations you already have. Extrapolation is extending beyond them. The second is much less safe.',
          'An anomaly in a climate series is the difference from a chosen average. Plotting anomalies is a fair way to show change. It is not, by itself, a proof of the cause.',
        ],
      },
      {
        title: 'Correlation is not causation',
        body: [
          'Correlation means the two quantities vary together. Causation means one brings the other about. A rising line, or a tight scatter, can show the first and still leave the second unproved.',
          'A null hypothesis usually states that there is no effect, or no difference, of the kind being tested. The study then asks whether the evidence is strong enough to set that claim aside.',
        ],
      },
      {
        title: 'Samples, censuses and bias',
        body: [
          'A population in statistics is the whole group you want to say something about. A sample is the part you actually observe. Random sampling means that every member had a known chance of being chosen.',
          'Bias in a sample means the sample systematically over-represents or misses some kind of case. A census differs from a sample because a census tries to include every member. A large biased sample is still biased.',
        ],
      },
      {
        title: 'What kind of data it is',
        body: [
          'Primary data are collected by the investigator for this study. Secondary data are taken from work someone else has already published or archived. Quantitative data are numbers. Qualitative data are descriptions, categories and words.',
          'A significant figure in a measurement reflects the precision of the instrument, not the number of digits a calculator can show. Rounding 16.48 to the nearest whole number gives 16. A percentage error compares the error with the true or accepted value.',
        ],
      },
      {
        title: 'Reliability, validity and a fair test',
        body: [
          'Reliability of a measurement means a repeat, under the same conditions, gives a similar result. Validity means you measured the thing you claimed to measure. A scale can be reliable and still invalid if it is consistently wrong.',
          'Reproducibility means another investigator, following the same method, can obtain a similar result. Replication in an experiment means the test is repeated, so one odd run does not decide the conclusion. A variable that is held constant is called a control variable. A double-blind trial is one in which neither the participant nor the person assessing the result knows who received the treatment.',
        ],
      },
      {
        title: 'How a report is judged',
        body: [
          'An abstract of a paper is a short account of the question, the method and the finding. A literature review is a survey of what has already been published. Peer review means that a report is read by other specialists before it is accepted.',
          'Plagiarism is presenting someone else’s words or ideas as your own. A citation is the note that tells the reader where those words or ideas came from. A conclusion in a report should follow from the evidence collected, and no further. Informed consent means that a participant agreed after being told what the study involves.',
        ],
      },
    ],
  },
  english: {
    title: 'English',
    intro: 'The English paper is grammar, sentence structure, and, for the Meteorologist post, vocabulary. These are the distinctions the questions turn on. Grammar is a set of rules rather than a diagram, so these notes are worked examples of the traps.',
    items: [
      {
        title: 'Agreement',
        body: [
          'A singular subject takes a singular verb. “The news is” and “the equipment is”, because news and equipment are treated as singular. “Neither of the two reports is complete.” “One of the students is absent.” “Each of the observers has a rain gauge.”',
          'The subject is the word that governs the verb. In “each of the observers”, the subject is each, not observers. “He doesn’t know the answer” uses doesn’t plus the base verb. “He don’t” and “he doesn’t knows” are both wrong.',
        ],
      },
      {
        title: 'Tense',
        body: [
          '“He went to Lahore yesterday” is simple past, because yesterday marks a completed action. The past perfect, “had left”, places one past event before another: “The train had left before we reached the station.”',
          'Since is used with a starting point: “since 2020”. For is used with a length of time: “for ten years”. “If I were the duty officer” uses were for a hypothetical present. Am would make the condition a real one.',
        ],
      },
      {
        title: 'Active and passive',
        body: [
          'The passive form of “She wrote a letter” is “A letter was written by her.” Simple past passive uses was or were plus the past participle. Wrote cannot follow was. Written is the participle.',
          '“The wind drives the turbine” becomes “The turbine is driven.” Present passive is is or are plus the participle. “Is drove” is not English. A command such as “Measure the rainfall” is an imperative: it tells someone to act, and the subject you is understood.',
        ],
      },
      {
        title: 'Articles, pronouns and prepositions',
        body: [
          '“An hour” uses an because hour begins with a vowel sound. The h is silent. “Interested in” is the pair, not interested on or interested at. “Depend on” is the pair, not depend of.',
          'I is a subject: “The observer and I recorded the rainfall.” Me is an object: “Give the chart to Ali and me.” Whom is the object form, so “Whom did you give the chart to?” Who would be the subject of the verb.',
        ],
      },
      {
        title: 'The words that get swapped',
        body: [
          'Fewer is for things you can count, less for a quantity: fewer days, less rain. Between is for two, among for more than two. Its is the possessive. It’s means it is. Their is possessive. There is a place. They’re means they are.',
          'Better is already the comparative of good. “More better” and “gooder” are not standard. Than signals a comparison of two, so “colder than”. Of three stations, the superlative is “the wettest”.',
        ],
      },
      {
        title: 'Parts of speech',
        body: [
          'In “a sudden shower”, sudden is the adjective, because it describes the noun shower. Measure is a verb. Quickly is an adverb: it tells how an action is done. And in “wind and rain” is a conjunction, because it joins two words of the same kind.',
          'Although introduces a contrast: “Although it was cloudy, no rain fell.” A question asks for information and ends with a question mark: “Is the pressure falling?” A statement ends with a full stop. An exclamation shows strong feeling.',
        ],
      },
      {
        title: 'Punctuation and spelling',
        body: [
          'Commas separate items in a list. However, joining two independent sentences, needs a semicolon before it and a comma after it: “The reading was 12 mm; however, the gauge leaked.” A comma alone would leave a run-on sentence.',
          'The correct spelling is separate. The plural of analysis is analyses. The plural of phenomenon is phenomena. These are the forms the paper uses when it wants a single letter to decide the mark.',
        ],
      },
      {
        title: 'Vocabulary the Meteorologist paper can ask',
        body: [
          'A synonym means the same. Abundant and plentiful, predict and forecast, brief and short, enormous and very large, fragile and easily broken, benevolent and kind, accurate and exact.',
          'An antonym means the opposite. Ancient and modern, scarce and plentiful, increase and decrease, shallow and deep. Humid and moist are synonyms, not opposites. The Assistant paper, as advertised, stays with grammar and sentence structure.',
        ],
      },
      {
        title: 'Comparatives and the subjunctive habit',
        body: [
          '“This result is better” compares two. “Of the three stations, Murree is the wettest” compares more than two. Best is the superlative and is not followed by than in the way better is.',
          'After suggest that, formal English uses the base form: “She suggested that he check the data again.” Checks would be an ordinary present. The base form is the one the formal sentence wants.',
        ],
      },
      {
        title: 'Sentence types, in one place',
        body: [
          '“The pressure is falling” is a statement. “Is the pressure falling?” is a question. “Measure the rainfall” is a command. “What a storm that was!” is an exclamation.',
          'A list uses commas between items. A full stop ends a statement. A question mark ends a question. None of them replaces the others. Reading which job the sentence is doing is often the whole of the question.',
        ],
      },
    ],
  },
}
