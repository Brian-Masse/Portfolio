with open('/Users/brianmasse/Developer/Python/CSC630/CSC630/AddisonDataSet/WeatherData.py') as f:
    lines = f.readlines()
    string = "\\n"
    for line in lines:
        for i in range(0, len(line)):
            if line[i] == '\n':
                string += "\\n"
            else:
                string += line[i]
    print(string+"\\n")
