const body = document.body





class ProjectEntry {
    constructor(title, date, description, imageSource, codeLabel, language, code) { 
        this.title = title
        this.date = date
        this.description = description
        this.imageSource = imageSource
        this.codeLabel = codeLabel
        this.language = language
        this.code = code
        this.code = code
    }
}

const entries= [
    new ProjectEntry("PART TO WHOLE VIS",
    "12 / 5 / 2021",
    "This is a description of this project",
    ["Images/12-5-21/graph1.png", "Images/12-5-21/graph2.png"],
    "_PYTHON: PW.py",
    "python",
    '\nimport matplotlib as plt\nimport seaborn as sns\n\ndark_purple = (190 / 255, 212 / 255, 255 / 255)\nmid_purple = (201 / 255, 193 / 255, 245 / 255)\ntan = (252 / 255, 209 / 255, 175 / 255)\n\nplt.rcParams.update({"font.size": 5})\npurpleCmap = sns.cubehelix_palette(as_cmap=True)\nbeachCMap = plt.colors.LinearSegmentedColormap.from_list(\n    "", [dark_purple, mid_purple, tan])\n\ndeaths = sns.load_dataset("AnimalDeaths")\npercentOfGender = deaths.pivot_table(\n    "percent", index="Animal", columns="Gender")\npercentOfAnimalKills = deaths.pivot_table(\n    "percent2", index="Animal", columns="Gender")\n\n\n# pG = sns.heatmap(percentOfGender, vmin=0, vmax=50, cmap=purpleCmap, annot=True).set(\n#     title="Deaths by an animal, as a percent of the total deaths of a gender")\npAK = sns.heatmap(percentOfAnimalKills, vmin=0, vmax=100, cmap=purpleCmap, annot=True).set(\n    title="Deaths of a gender by an animal, as a percent of the total kills by that animal")\n\nplt.pyplot.show()\n\n')

    ,new ProjectEntry("ADDISON DATA VIS",
    "12 / 9 / 2021",
    "We were asked to look at a large set of data provided by the addison and make meaning and connections form it, visually. Me and my wonderful partner, Isaac, decided to investigate the relationship between time, date, and humidity. The two images below are my onw creations, while he went for a 3D scatterplot",
    ["Images/12-9-21/graph1.png", "Images/12-9-21/graph2.png"],
    "_PYTHON: AddisonDataSet.py",
    "python",
    '\nimport matplotlib as plt\n\nfrom pandas._libs.tslibs import timedeltas\nimport seaborn as sns\nimport pandas as pd\n\nimport numpy as np\nimport datetime\n\n\ncmap = plt.pyplot.get_cmap("Oranges")\ncmap_r = plt.pyplot.get_cmap("Oranges_r")\n\ndf = pd.read_csv(\n    "/Users/brianmasse/Developer/Python/CSC630/CSC630/AddisonDataSet/AddisoDataSet.csv")\n\ndates = pd.to_datetime(df["Date"])\ntimes = df["Time (h)"]\ndf["Date"] = dates\n\nhd = pd.pivot_table(df, columns=[\n    "Time (h)"], index=["Date"], values=["Humidity"], fill_value=0)\ntd = pd.pivot_table(df, columns=[\n    "Time (h)"], index=["Date"], values=["Temperature"], fill_value=0)\n\n# humidtyHeatMap = sns.heatmap(\n#     hd, vmin=40, square=False, cmap=cmap)\n\ntempHeatMap = sns.heatmap(\n    td, vmin=65, square=False, cmap=cmap_r)\n\n\ntick_number = len(tempHeatMap.get_yticklabels())\ninterval = int(len(dates) / tick_number)\ny_labels = [dates[i].strftime("%m-%d-%y")\n            for i in range(0, (interval * tick_number), interval)]\n\nx_labels = [datetime.datetime.strptime(str(times[i]), "%H:%M:%S").strftime("%H")\n            for i in range(0, (24))]\n\n# humidtyHeatMap.set_xticklabels(x_labels, rotation=65)\n# humidtyHeatMap.set_yticklabels(y_labels)\ntempHeatMap.set_xticklabels(x_labels, rotation=65)\ntempHeatMap.set_yticklabels(y_labels)\n\n# humidtyHeatMap.set_ylabel("Dates, through Sep 2020 to Sep 2021")\n# humidtyHeatMap.set_xlabel("Time, in hours")\n# humidtyHeatMap.set_title(\n#     "The Humidity in the addision at certain times and dates")\ntempHeatMap.set_ylabel("Dates, through Sep 2020 to Sep 2021")\ntempHeatMap.set_xlabel("Time, in hours")\ntempHeatMap.set_title(\n    "The Temperature in the addision at certain times and dates")\n\n\nplt.pyplot.show()\n\n')

    ,new ProjectEntry("WEATHER VIS",
    "12 / 13 / 2021",
    "After observing the trends within the Addison, I though it might be interesting to look at the temperature in the rest of Andover during the same time period to see if the odd spikes and dips could be traced to a particular heat wave. I found a resource <a href='https://www.visualcrossing.com/weather-data'>here</a> that had a wide variety of data, offered both over a large date range, but also hourly. After importing this, I used the same visual render, a heatmap, to look for patterns. While I did not notice any that directly coorelated to my intial findings, I did notice that during the middle of the day while the temperature rose, the humiditiy decreased. This by itself was not super interesting, however an almost idential inverse relationship is seen within the addison, as when the humidity spiked, the temperature dropped. Very intersting. ",
    ["Images/12-13-21(1)/humidity.png", "Images/12-13-21(1)/temp.png"],
    "_PYTHON: TemperatureData.py",
    "python",
    '\nimport pandas as pd\nfrom pandas._libs.tslibs.timestamps import Timestamp\nimport datetime\n\nimport matplotlib as plt\nimport seaborn as sns\nfrom seaborn.matrix import heatmap\n\n\ndef create_labels(date_code, current_labels, date_list):\n    tick_number = len(current_labels)\n    interval = int(len(date_list) / tick_number)\n\n    return [date_list[i].strftime(date_code) for i in range(\n        0, (interval * tick_number), interval)]\n\n\n# organize data\n\ndf = pd.read_csv("WeatherData.csv")\ndatetimes = pd.to_datetime(df["datetime"])\n\ntimes = [datetimes[i].time() for i in range(0, len(datetimes))]\ndates = [datetimes[i].date() for i in range(0, len(datetimes))]\ndf["times"] = times\ndf["dates"] = dates\n\n\ndef create_heatmap(data, title):\n    pdf = pd.pivot_table(df, values=[data],\n                         index=df["dates"], columns=["times"])\n\n    heatmap = sns.heatmap(\n        pdf, square=False)\n\n    # create and set heatmap appearance\n\n    heatmap.set_title(data + " " + title)\n    heatmap.set_xticklabels(create_labels(\n        "%H", heatmap.get_xticklabels(), times[:24]))\n\n    heatmap.set_yticklabels(create_labels(\n        "%m %d, %Y", heatmap.get_yticklabels(), dates))\n\n    heatmap.set_xlabel("Time (h)")\n\n\ncreate_heatmap(\n    "humidity", "in Andover, as a function of the date and time")\nplt.pyplot.show()\n\n')

    ,new ProjectEntry("WEATHER++ VIS",
    "12 / 13 / 2021",
    "After finish the comparrison between the temperature and the humidity, I continued to explore to see if I could find any further patterns in the extensive data <a href='https://www.visualcrossing.com/weather-data'>this resource provided</a>, and while I won't explicity go over the pattens I behan to deduce I will post some of my favorite visualizatons here. (The UV Index is my favorite :))",
    ["Images/12-13-21(2)/graph1.png", "Images/12-13-21(2)/graph2.png", "Images/12-13-21(2)/graph3.png", "Images/12-13-21(2)/graph4.png", "Images/12-13-21(2)/graph5.png"],
    "_PYTHON: TemperatureData.py",
    "python",
    '\nimport pandas as pd\nfrom pandas._libs.tslibs.timestamps import Timestamp\nimport datetime\n\nimport matplotlib as plt\nimport seaborn as sns\nfrom seaborn.matrix import heatmap\n\n\ndef create_labels(date_code, current_labels, date_list):\n    tick_number = len(current_labels)\n    interval = int(len(date_list) / tick_number)\n\n    return [date_list[i].strftime(date_code) for i in range(\n        0, (interval * tick_number), interval)]\n\n\n# organize data\n\ndf = pd.read_csv("WeatherData.csv")\ndatetimes = pd.to_datetime(df["datetime"])\n\ntimes = [datetimes[i].time() for i in range(0, len(datetimes))]\ndates = [datetimes[i].date() for i in range(0, len(datetimes))]\ndf["times"] = times\ndf["dates"] = dates\n\n\ndef create_heatmap(data, title):\n    pdf = pd.pivot_table(df, values=[data],\n                         index=df["dates"], columns=["times"])\n\n    heatmap = sns.heatmap(\n        pdf, square=False)\n\n    # create and set heatmap appearance\n\n    heatmap.set_title(data + " " + title)\n    heatmap.set_xticklabels(create_labels(\n        "%H", heatmap.get_xticklabels(), times[:24]))\n\n    heatmap.set_yticklabels(create_labels(\n        "%m %d, %Y", heatmap.get_yticklabels(), dates))\n\n    heatmap.set_xlabel("Time (h)")\n\n\ncreate_heatmap(\n    "humidity", "in Andover, as a function of the date and time")\nplt.pyplot.show()\n\n')


]

const HStack = document.createElement("div")
HStack.className="HStack"
body.appendChild(HStack)

for ( let i = entries.length - 1; i >= 0 ; i -= 1 ) {
    const projectEntry = document.createElement("div")
    projectEntry.className = "projectEntry relativePos il"
    

    const background = document.createElement("div")
    background.className = "background"
    projectEntry.appendChild(background)

    const filler = document.createElement("div")
    filler.className = "filler"

    const title = document.createElement("span")
    const date = document.createElement("span")
    title.className = "top left glowText"; date.className = "top right glowText"
    title.innerText = entries[i].title; date.innerText = entries[i].date
    projectEntry.appendChild(filler);projectEntry.appendChild(title);projectEntry.appendChild(date)

    const description = document.createElement("p")
    description.className = "text"
    description.innerHTML = entries[i].description
    projectEntry.appendChild(description)

    for (let f = 0; f < entries[i].imageSource.length; f ++) {
        const image = document.createElement("img")
        image.src = entries[i].imageSource[f]
        image.className = "image roundShadow ol"
        projectEntry.appendChild(image)
    }
    

    const codeBlock = document.createElement("div")
    codeBlock.className = "relativePos"
    const codeTitle = document.createElement("div")
    codeBlock.appendChild(codeTitle)
    codeTitle.className = "glowText top left"
    codeTitle.innerText = entries[i].codeLabel

    const codePre = document.createElement("pre")
    codeBlock.appendChild(codePre)
    const code = document.createElement("code")
    codePre.appendChild(code)
    code.className="language-python line-numbers"
    code.innerHTML=entries[i].code
    projectEntry.appendChild(codeBlock)

    const contentSpacer = document.createElement("div")
    contentSpacer.className = "contentSpacer il"

    HStack.appendChild(projectEntry)
    HStack.appendChild(contentSpacer)
}
