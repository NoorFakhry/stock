from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import os
import requests

app = Flask(__name__)
socketio = SocketIO(app)

apiKey = os.getenv('apiKey')
print('api key 👇')
print(apiKey)

@app.route('/')
def indexPage():
    return render_template('index.html')

@socketio.on('connect')
def handleConnect():
    print('New user Connected')

@socketio.on('intraday')
def intraday(symbol, interval):
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval={interval}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('intraday', data)

@socketio.on('Winning Portfolios')
def winingPortfolios():
    url = f'https://www.alphavantage.co/query?function=TOURNAMENT_PORTFOLIO&season=2021-09&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Winning Portfolios', data)

@socketio.on('Company Overview')
def companyOverview(symbol):
    url = f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Company Overview', data)

@socketio.on('Income Statement')
def incomeStatament(symbol):
    url = f'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol={symbol}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Income Statement', data)

@socketio.on('Balance Sheet')
def balanceSheet(symbol):
    url = f'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol={symbol}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Balance Sheet', data)

@socketio.on('Cash Flow')
def cashFlow(symbol):
    url = f'https://www.alphavantage.co/query?function=CASH_FLOW&symbol={symbol}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Cash Flow', data)

@socketio.on('Currency Converter')
def currencyConverter(fromCurrency, toCurrency):
    url = f'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency={fromCurrency}&to_currency={toCurrency}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Currency Converter', data)

@socketio.on('WTI')
def WIT():
    url = f'https://www.alphavantage.co/query?function=WTI&interval=monthly&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('WTI', data)

@socketio.on('Brent')
def Brent():
    url = f'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Brent', data)

@socketio.on('copper prices')
def copperPrices():
    url = f'https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('copper prices', data)

@socketio.on('Real GDP')
def GDP():
    url = f'https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Real GDP', data)
@socketio.on('Treasury yield')
def treasuryTield():
    url = f'https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('Treasury yield', data )

@socketio.on('SMA')
def SMA(symbol, interval, timePeriod, seriesType):
    url = f'https://www.alphavantage.co/query?function=SMA&symbol={symbol}&interval={interval}&time_period={timePeriod}&series_type={seriesType}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('SMA', data)

@socketio.on('EMA')
def SMA(symbol, interval, timePeriod, seriesType):
    url = f'https://www.alphavantage.co/query?function=EMA&symbol={symbol}&interval={interval}&time_period={timePeriod}&series_type={seriesType}&apikey={apiKey}'
    r = requests.get(url)
    data = r.json()
    emit('EMA', data)

if __name__ == '__main__':
    socketio.run(app,debug=True, port= 8000)