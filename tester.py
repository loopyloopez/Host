import requests



URL='http://localhost:4000'

while True:
    comfirmation=input("Press Enter Table to send request")
    print(requests.post(URL,params={'table':comfirmation}))