---
title: "SNIB"

subtitle: "The objective: measure the luminosity, hygrometry and temperature of the rooms and transmitting the data on a server for decision-making."

date: "2019-08-13"

language: "en"

---
The SNIB (Saint Nicolas Intelligent Building) is a project I did in a Saint Nicolas high school. We installed sensor units in different parts of the building to collect data and we were able to detect energy wastage, such as overheating or lights accidentally left on at night. The ultimate goal of this project is to help the building become more energy efficient and sustainable.

To achieve this, the sensor units are powered by two 18650 rechargeable lithium-ion cells, with data processing handled by a Wemos D1 mini. These units are equipped with a temperature and hygrometry sensor, as well as an ambient light sensor that detects changes in temperature, humidity and light levels.

![images/grafana](/images/grafana.png)

In order to visualise the data collected by the sensor units, we set up a server running Grafana. This allowed us to create a dashboard to easily monitor and analyse the data. It shows real-time data and provides historical data for easy comparison and analysis.

![images/boot_animation](/images/SNIB-see-thru.png)

1. Wemos D1 Mini
2. SHT30 Shield V1.0.0 for WEMOS D1 mini
3. LOLIN ambient light Shield V1.0.0
4. OLED screen
5. Micro-usb charge controler
6. 18650 Battery

Render of the 3D printed housing for the sensor unit, designed and 3D printed by myself

<div className="aspect-w-16 aspect-h-9 hidden sm:block">
  <iframe width="560" height="315" src="/images/SNIB-TurnTable.html"></iframe>
</div>
<div className="visible sm:hidden">
  ![images/boot_animation](/images/SNIB-TurnTable.gif)
</div>

The data collected by the sensor units can be used to measure the effectiveness of additional insulation or new strategies, and can help identify areas where energy waste can be reduced. For example, if a sensor unit detects a room that is constantly overheating, this may be an indication that additional insulation is needed.

Overall, the SNIB project has been a great learning experience for me. It has allowed me to develop my skills in electronics and data analysis, while also contributing to a more sustainable future.
