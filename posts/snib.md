---
title: "SNIB"

subtitle: "The objective: measure the luminosity, hygrometry and temperature of the rooms and transmitting the data on a server for decision-making."

date: "2019-08-13"
---
The SNIB (Saint Nicolas Intelligent Building) is a project made up of sensor units installed in different parts of the building and a server on which Grafana is running for the visualisation of the data. The sensor unit is powered by two 18650 rechargeable lithium-ion cells, the data processing is handled by a Wemos D1 mini, the unit is equipped with a temperature and hygrometry sensor as well as an ambient light sensor.

![images/boot_animation](/images/SNIB-see-thru.png)

1. Wemos D1 Mini
2. SHT30 Shield V1.0.0 for WEMOS D1 mini
3. LOLIN ambient light Shield V1.0.0
4. OLED screen
5. Micro-usb charge controler
6. 18650 Battery

Render of the 3D printed housing for the sensor unit, designed and 3D printed by myself

<iframe width="560" height="315" src="/images/SNIB-TurnTable.html"></iframe>

The ultimate goal of the project is to detect energy waste, such as overheating or lights accidentally left on at night. The data can also be used to measure the effectiveness of additional insulation or new policies, for example
