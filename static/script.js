const userChoices = {
    service: null,
    company: null,
    timePeriod: null,
    interval: null,
    seriesType: null,
    fromCurrency: null,
    toCurrency: null
}

const setService = (element) => {
    userChoices.service = element.textContent
}

const setCompany = (element) => {
    switch(element.options[element.selectedIndex].textContent){
        case 'IBM':
            userChoices.company = 'IBM'
            break
        case 'Apple':
            userChoices.company = 'AAPL'
            break
        case 'Google':
            userChoices.company = 'GOOGL'
            break
        case 'Tesla':
            userChoices.company = 'TSLA'
            break     
        case 'Nvidia':
            userChoices.company = 'NVDA'
            break
        case 'Nike':
            userChoices.company = 'NKE'
            break
        case 'Meta':
            userChoices.company = 'META'
            break
        case 'Amazon':
            userChoices.company = 'AMZN'
            break
        case 'General Electric':
            userChoices.company = 'GE'
            break
        case 'Exxon Mobil':
            userChoices.company = 'XOM'
            break
    }
    
}

const setTimePeriod = (element) => {
    userChoices.timePeriod = element.options[element.selectedIndex].textContent
}
const setInterv = (element) => {
    userChoices.interval = element.options[element.selectedIndex].textContent
}
const setSeriesType = (element) => {
    userChoices.seriesType = element.options[element.selectedIndex].textContent
}

const setFromCurrency = (element) => {
    switch(element.options[element.selectedIndex].textContent){
        case 'United States Dollar':
            userChoices.fromCurrency = 'USD'
            break
        case 'Euro':
            userChoices.fromCurrency = 'EUR'
            break
        case 'Canadian Dollar':
            userChoices.fromCurrency  = 'CAD'
            break
        case 'United Arab Emirates Dirham':
            userChoices.fromCurrency  = 'AED'
            break     
        case 'Egyptian Pound':
            userChoices.fromCurrency  = 'EGP'
            break
        case 'Bitcoin':
            userChoices.fromCurrency = 'BTC'
            break
    }   
}

const setToCurrency = (element) => {
    switch(element.options[element.selectedIndex].textContent){
        case 'United States Dollar':
            userChoices.toCurrency = 'USD'
            break
        case 'Euro':
            userChoices.toCurrency = 'EUR'
            break
        case 'Canadian Dollar':
            userChoices.toCurrency = 'CAD'
            break
        case 'United Arab Emirates Dirham':
            userChoices.toCurrency = 'AED'
            break     
        case 'Egyptian Pound':
            userChoices.toCurrency = 'EGP'
            break
        case 'Bitcoin':
            userChoices.toCurrency = 'BTC'
            break
    }   
}

const displayService = () => {
    const service = document.getElementById('service')
    service.innerText = userChoices.service
    const serviceTitle = document.getElementById('serviceTitle')
    serviceTitle.style.display = ('inline-block')
}

const clearInfo = () => {
    const info = document.getElementById('info')
    info.innerHTML = ''
}

const showSelectCompanyForm = () => {
    const selectCompany = document.getElementById('selectCompany')
    selectCompany.style.display = 'inline-block'
}
const hideSelectCompanyForm= () => {
    const selectCompany = document.getElementById('selectCompany')
    selectCompany.style.display = 'none'
}

const showSelectIntervalForm = () => {
    const selectInterval = document.getElementById('selectInterval')
    selectInterval.style.display = 'inline-block'
}
const hideSelectIntervalForm = () => {
    const selectInterval = document.getElementById('selectInterval')
    selectInterval.style.display = 'none'
}
const showSelectIntervalIntradayForm = () => {
    const selectIntervalIntraday = document.getElementById('selectIntervalIntraday')
    selectIntervalIntraday.style.display = 'inline-block'
}
const hideSelectIntervalIntradayForm  = () => {
    const selectIntervalIntraday = document.getElementById('selectIntervalIntraday')
    selectIntervalIntraday.style.display = 'none'
}
const showSelectTimePeriodForm = () => {
    const selectTimePeriod = document.getElementById('selectTimePeriod')
    selectTimePeriod.style.display = 'inline-block'
}
const hideSelectTimePeriodForm = () => {
    const selectTimePeriod = document.getElementById('selectTimePeriod')
    selectTimePeriod.style.display = 'none'
}

const showSelectSeriesTypeForm = () => {
    const selectSeriesType = document.getElementById('selectSeriesType')
    selectSeriesType.style.display = 'inline-block'
}
const hideSelectSeriesTypeForm = () => {
    const selectSeriesType = document.getElementById('selectSeriesType')
    selectSeriesType.style.display = 'none'
}

const showDisplayInfoBtn = () => {
    const displayInfoBtn = document.getElementById('displayInfoBtn')
    displayInfoBtn.style.display = 'inline-block'
}

const showCurrencyFromOptions = () => {
    const currFrom = document.getElementById('currFrom')
    currFrom.style.display = 'inline-block'
}

const hideCurrencyFromOptions = () => {
    const currFrom = document.getElementById('currFrom')
    currFrom.style.display = 'none'
}

const showCurrencyToOptions = () => {
    const currTo = document.getElementById('currTo')
    currTo.style.display = 'inline-block'
}

const hideCurrencyToOptions = () => {
    const currTo = document.getElementById('currTo')
    currTo.style.display = 'none'
}

const displayLoading = () => {
    const loading = document.getElementById('loading')
    loading.style.display = 'block'
    
}

const hideLoading = () => {
    const loading = document.getElementById('loading')
    loading.style.display = 'none'
}


const handleIntradayClick = () => {
    displayService()
    clearInfo()
    showSelectCompanyForm() 
    showDisplayInfoBtn() 
    showSelectIntervalIntradayForm()
    hideCurrencyFromOptions()
    hideCurrencyToOptions()
    hideSelectIntervalForm()
    hideSelectTimePeriodForm()
    hideSelectSeriesTypeForm()
}

const handleFundamentalDataClick = () => {
    displayService()
    clearInfo()
    showSelectCompanyForm()
    showDisplayInfoBtn()
    hideCurrencyFromOptions()
    hideCurrencyToOptions()
    hideSelectIntervalForm()
    hideSelectIntervalIntradayForm()
    hideSelectTimePeriodForm()
    hideSelectSeriesTypeForm()
    hideCurrencyFromOptions()
    hideCurrencyToOptions()
}

const handleCurrencyConverterClick = () => {
    displayService()
    clearInfo()
    showCurrencyFromOptions()
    showCurrencyToOptions()
    hideSelectIntervalForm()
    hideSelectIntervalIntradayForm()
    hideSelectTimePeriodForm()
    hideSelectSeriesTypeForm()
    hideSelectCompanyForm()
    showDisplayInfoBtn()
}

const handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick = () => {
    displayService()
    clearInfo()
    hideSelectIntervalForm()
    hideSelectIntervalIntradayForm()
    hideSelectTimePeriodForm()
    hideSelectSeriesTypeForm()
    hideCurrencyFromOptions()
    hideCurrencyToOptions()
    hideSelectCompanyForm()
    showDisplayInfoBtn()
}

const handelTechnicalIndicatorsClick = () => {
    showSelectCompanyForm()
    showSelectIntervalForm()
    showSelectTimePeriodForm()
    showSelectSeriesTypeForm()
    displayService()
    showDisplayInfoBtn()
    hideCurrencyFromOptions()
    hideCurrencyToOptions()
    hideSelectIntervalIntradayForm()
    clearInfo()
}

const handleErr = () => {
    clearInfo()
    const errTitle = document.createElement('h1')
    errTitle.innerHTML = 'Please Enter a Valid Data'
    info.appendChild(errTitle)
}


const intradayBtn = document.getElementById('intradayBtn')
intradayBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleIntradayClick()
}

const winningPortfoliosBtn = document.getElementById('winningPortfolios')
winningPortfoliosBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick()
}

const companyOverviewBtn = document.getElementById('companyOverview')
companyOverviewBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleFundamentalDataClick()
}

const incomeStatementBtn = document.getElementById('incomeStatement')
incomeStatementBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleFundamentalDataClick()
}

const balanceSheetBtn = document.getElementById('balanceSheet')
balanceSheetBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleFundamentalDataClick()
}

const cashFlowBtn = document.getElementById('cashFlow')
cashFlowBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleFundamentalDataClick()
}

const currencyConverterBtn = document.getElementById('currencyConverter')
currencyConverterBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleCurrencyConverterClick()
}

const wtiBtn = document.getElementById('wti')
wtiBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick()
}

const brentBtn = document.getElementById('brent')
brentBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick()
}

const copperBtn = document.getElementById('copper')
copperBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element) 
    handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick()
}

const gdpBtn = document.getElementById('gdp')
gdpBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element) 
    handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick()
}

const treasuryYieldBtn = document.getElementById('treasuryYield')
treasuryYieldBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handleCommoditiesAndWinningPortfoliosAndEconomicIndicatorsClick()
}

const smaBtn = document.getElementById('sma')
smaBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element) 
    handelTechnicalIndicatorsClick()
}

const emaBtn = document.getElementById('ema')
emaBtn.onclick = (e) => {
    clearPricesInterval()
    const element = e.target
    setService(element)
    handelTechnicalIndicatorsClick()
}

let pricesIntreval = null
const clearPricesInterval = () => {
    clearInterval(pricesIntreval)
}

const socket = io()
const displayInfoBtn = document.getElementById('displayInfoBtn')
socket.on('connect', () => {
    console.log('connected')
    displayInfoBtn.onclick = () => {
    clearInfo()
    displayLoading()
        if(userChoices.service === 'Intraday Trading Prices') {
            socket.emit('intraday', userChoices.company, userChoices.interval)
            const minute = 60000
            pricesIntreval = setInterval(() => {
                socket.emit('intraday', userChoices.company, userChoices.interval)
            }, minute)
        } else if(userChoices.service === 'Winning Portfolios') {
            socket.emit('Winning Portfolios')
        } else if(userChoices.service === 'Company Overview') {
            socket.emit('Company Overview', userChoices.company)
        } else if(userChoices.service === 'Income Statement') {
            socket.emit('Income Statement', userChoices.company)
        } else if(userChoices.service === 'Balance Sheet') {
            socket.emit('Balance Sheet', userChoices.company)
        } else if(userChoices.service === 'Cash Flow') {
            socket.emit('Cash Flow', userChoices.company)            
        } else if(userChoices.service === 'Currency Converter') {
            socket.emit('Currency Converter', userChoices.fromCurrency, userChoices.toCurrency)
        } else if(userChoices.service === 'Crude Oil Prices: West Texas Intermediate (WTI)') {
            socket.emit('WTI')
        } else if(userChoices.service === 'Crude Oil Prices (Brent)') {
            socket.emit('Brent')
        } else if(userChoices.service === 'Global Price of Copper') {
            socket.emit('copper prices')
        } else if(userChoices.service === 'Real GDP') {
            socket.emit('Real GDP')
        } else if(userChoices.service === 'Treasury yield') {
            socket.emit('Treasury yield')
        } else if(userChoices.service === 'SMA ( simple moving average)') {
            socket.emit('SMA', userChoices.company, userChoices.interval, userChoices.timePeriod, userChoices.seriesType)
            const minute = 60000
            pricesIntreval = setInterval(() => {
                socket.emit('SMA', userChoices.company, userChoices.interval, userChoices.timePeriod, userChoices.seriesType)
            }, minute)
        } else if(userChoices.service === 'EMA (exponential moving average)') {
            socket.emit('EMA', userChoices.company, userChoices.interval, userChoices.timePeriod, userChoices.seriesType)
            const minute = 60000
            pricesIntreval = setInterval(() => {
                socket.emit('EMA', userChoices.company, userChoices.interval, userChoices.timePeriod, userChoices.seriesType)
            }, minute)
        } else {
            alert('Wrong choice, Try again !!!')
        }
    }

    socket.on('intraday', data => {
        console.log(data)
        hideLoading()
        renderIntradayAndTechnicalIndicators(data)
    })

    socket.on('Winning Portfolios', data => {
        console.log(data)
        hideLoading()
        renderWinningPortfolios(data)
    })
    socket.on('Company Overview', data => {
        console.log(data)
        hideLoading()
        renderCompanyOverview(data)
    })
    socket.on('Income Statement', data => {
        console.log(data)
        hideLoading()
        renderincomeStatement(data)
    })
    socket.on('Balance Sheet', data => {
        console.log(data)
        hideLoading()
        renderBalanceSheet(data)
    })
    socket.on('Cash Flow', data => {
        console.log(data)
        hideLoading()
        renderCashFlow(data)
    })
    socket.on('Currency Converter', data => {
        console.log(data)
        hideLoading()
        renderExchangeRate(data)
    })
    socket.on('WTI', data => {
        console.log(data)
        hideLoading()
        renderCommodityAndEconomicIndicators(data)
    })

    socket.on('Brent', data => {
        console.log(data)
        hideLoading()
        renderCommodityAndEconomicIndicators(data)
    })

    socket.on('copper prices', data => {
        console.log(data)
        hideLoading()
        renderCommodityAndEconomicIndicators(data)
    })
    socket.on('Real GDP', data => {
        console.log(data)
        hideLoading()
        renderCommodityAndEconomicIndicators(data)
    })
    socket.on('Treasury yield', data => {
        console.log(data)
        hideLoading()
        renderCommodityAndEconomicIndicators(data)
    })
    socket.on('SMA', data => {
        console.log(data)
        hideLoading()
        renderIntradayAndTechnicalIndicators(data)
    })
    socket.on('EMA', data => {
        console.log(data)
        hideLoading()
        renderIntradayAndTechnicalIndicators(data)
    })
})

const renderIntradayAndTechnicalIndicators = (data) => {
    if(data['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const info = document.getElementById('info')
    const h3 = document.createElement('h3')
    h3.textContent = 'Live Prices will update every minute if there are any changes'
    info.appendChild(h3)
    const dataProps = Object.keys(data)
    // render meta data
    const metaDataTitle = document.createElement('h1')
    const metaDataTitleContent = dataProps[0]
    metaDataTitle.textContent = metaDataTitleContent
    info.appendChild(metaDataTitle)
    const metaDataTable = document.createElement('table')
    info.appendChild(metaDataTable)
    metaDataTable.classList.add('table')
    metaDataTable.classList.add('table-info')
    const metaDatatableBody = document.createElement('tbody')
    metaDataTable.appendChild(metaDatatableBody)
    
    const metaData = data[metaDataTitleContent]
    for(const key in metaData) {
        const metaDatatr = document.createElement('tr')
        metaDatatableBody.appendChild(metaDatatr)
        const metaDatatableCellHead = document.createElement('th')
        metaDatatableCellHead.setAttribute('scope', 'row')
        metaDatatr.appendChild(metaDatatableCellHead)
        metaDatatableCellHead.textContent = key
        const metaDatatableData = document.createElement('td')
        metaDatatableData.textContent = metaData[key]
        metaDatatr.appendChild(metaDatatableData)
    }

    const breakLine = document.createElement('a')
    breakLine.classList.add('btn')
    breakLine.classList.add('btn-primary')
    breakLine.classList.add('disabled')
    breakLine.classList.add('placeholder')
    breakLine.classList.add('col-4')
    info.appendChild(breakLine)

    // render data
    const h1 = document.createElement('h1')
    const h1Content = dataProps[1]
    h1.textContent = h1Content
    info.append(h1)
    const table = document.createElement('table')
    table.classList.add('table')
    table.classList.add('table-success')
    const thead = document.createElement('thead')
    table.appendChild(thead)
    const tr = document.createElement('tr')
    thead.appendChild(tr)
    const keys = Object.keys(data[dataProps[1]])
    const columns = data[dataProps[1]][keys[0]]
    info.appendChild(table)
    const th = document.createElement('th')
    th.setAttribute('scope', 'col')
    th.textContent = 'Date & Time'
    tr.appendChild(th)
    for(const key in columns) {
        const th = document.createElement('th')
        th.setAttribute('scope', 'col')
        th.textContent = key
        tr.appendChild(th)
    }


    const mainData = data[h1Content]
    const dateAndTimes = Object.keys(mainData)
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    dateAndTimes.forEach(dateAndTime => {
        const tr = document.createElement('tr')
        const thead = document.createElement('th')
        thead.setAttribute('scope', 'row')
        thead.textContent = dateAndTime
        tr.appendChild(thead)
        tbody.appendChild(tr)
        const entry = mainData[dateAndTime]
        for(const key in entry) {
            const tableData = document.createElement('td')
            const data = entry[key]
            tableData.textContent = data
            tr.appendChild(tableData)
        }
    })
}


const renderWinningPortfolios = (winnningPortfoliosData) => {
    if(winnningPortfoliosData['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const info = document.getElementById('info')
    const dataProps = Object.keys(winnningPortfoliosData)
    const seasonSection = dataProps[0]
    const rankingSection = dataProps[1]
    const winningPortfoliosSeasonTitle = document.createElement('h1')
    winningPortfoliosSeasonTitle.textContent = `${seasonSection}: ${winnningPortfoliosData[seasonSection]}`
    info.appendChild(winningPortfoliosSeasonTitle)
    const winnningPortfoliosTable = document.createElement('table')
    winnningPortfoliosTable.classList.add('table')
    winnningPortfoliosTable.classList.add('table-striped')
    info.appendChild(winnningPortfoliosTable)
    // render columns
    const columns = Object.keys(winnningPortfoliosData[rankingSection][0])
    const winnningPortfoliosThead = document.createElement('thead')
    winnningPortfoliosTable.appendChild(winnningPortfoliosThead)
    const winnningPortfoliosTR = document.createElement('tr')
    winnningPortfoliosThead.appendChild(winnningPortfoliosTR)
    columns.forEach(col => {
        const winnningPortfoliosTH = document.createElement('th')
        winnningPortfoliosTH.setAttribute('scope', 'col')
        winnningPortfoliosTH.textContent = col
        winnningPortfoliosTR.appendChild(winnningPortfoliosTH)
    })

    // render data
    const winnningPortfoliosTableBody = document.createElement('tbody')
    winnningPortfoliosTable.appendChild(winnningPortfoliosTableBody)
    winnningPortfoliosData[rankingSection].forEach(rank => {
        const tr = document.createElement('tr')
        winnningPortfoliosTableBody.appendChild(tr)
        for(const item in rank) {
            if(item === 'portfolio') {
                const portfolios = rank[item]
                const div = document.createElement('div')
                portfolios.forEach(portfolio => {
                    const p = document.createElement('p')
                    p.innerText = `Company: ${portfolio.symbol}, Shares: ${portfolio.shares} `
                    div.appendChild(p)
                })
                const td = document.createElement('td')
                td.appendChild(div)
                tr.appendChild(td)
            } else {
                const td = document.createElement('td')
                td.innerText = (rank[item])
                tr.appendChild(td)
            }
            
        }
    })
}

const renderCompanyOverview = (companyOverviewData) => {
    if(companyOverviewData['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    if(Object.keys(companyOverviewData).length) {
        // render meta data
        const info = document.getElementById('info')
        const companyOverviewTitle = document.createElement('h1')
        companyOverviewTitle.textContent = `Overview for ${companyOverviewData.Name}:`
        info.appendChild(companyOverviewTitle)
        const companyOverviewTable = document.createElement('table')
        info.appendChild(companyOverviewTable)
        companyOverviewTable.classList.add('table')
        companyOverviewTable.classList.add('table-info')
        const companyOverviewtableBody = document.createElement('tbody')
        companyOverviewTable.appendChild(companyOverviewtableBody)
        
        for(const key in companyOverviewData) {
            const companyOverviewtr = document.createElement('tr')
            companyOverviewtableBody.appendChild(companyOverviewtr)
            const companyOverviewtableCellHead = document.createElement('th')
            companyOverviewtableCellHead.setAttribute('scope', 'row')
            companyOverviewtr.appendChild(companyOverviewtableCellHead)
            companyOverviewtableCellHead.textContent = key
            const companyOverviewtableData = document.createElement('td')
            companyOverviewtableData.textContent = companyOverviewData[key]
            companyOverviewtr.appendChild(companyOverviewtableData)
        }
    } else {
        const h1 = document.createElement('h1')
        h1.textContent = 'No Content, Try Again !!!'
        info.appendChild(h1)
    }

}

const renderincomeStatement = (incomeStatementData) => {
    if(incomeStatementData['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const info = document.getElementById('info')
    if(Object.keys(incomeStatementData).length) {
        const incomeStatementAnuualReportsTitle = document.createElement('h1')
        incomeStatementAnuualReportsTitle.textContent = `Annual Reports for ${incomeStatementData.symbol}:`
        info.appendChild(incomeStatementAnuualReportsTitle)
        const annualReports = incomeStatementData.annualReports
        const incomeStatementTable = document.createElement('table')
        info.appendChild(incomeStatementTable)
        incomeStatementTable.classList.add('table')
        incomeStatementTable.classList.add('table-info')
        const incomeStatementTableBody = document.createElement('tbody')
        incomeStatementTable.appendChild(incomeStatementTableBody)
        annualReports.forEach(report => {
            for(const item in report) {
                const incomeStatementtr = document.createElement('tr')
                incomeStatementTableBody.appendChild(incomeStatementtr)
                const incomeStatementTableCellHead = document.createElement('th')
                incomeStatementTableCellHead.setAttribute('scope', 'row')
                incomeStatementtr.appendChild(incomeStatementTableCellHead)
                incomeStatementTableCellHead.textContent = item
                const incomeStatementTableData = document.createElement('td')
                incomeStatementTableData.textContent = report[item]
                incomeStatementtr.appendChild(incomeStatementTableData)
            }
            const breakLine = document.createElement('a')
            breakLine.classList.add('btn')
            breakLine.classList.add('btn-primary')
            breakLine.classList.add('disabled')
            breakLine.classList.add('placeholder')
            breakLine.classList.add('col-4')
            incomeStatementTableBody.appendChild(breakLine)
        })
    } else {
        const h1 = document.createElement('h1')
        h1.textContent = 'No Content, Try Again !!!'
        info.appendChild(h1)
    }

}

const renderBalanceSheet = (balanceSheetData) => {
    if(balanceSheetData['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const info = document.getElementById('info')
    if(Object.keys(balanceSheetData).length) {
        const balanceSheetAnuualReportsTitle = document.createElement('h1')
        balanceSheetAnuualReportsTitle.textContent = `Annual Reports for ${balanceSheetData.symbol}:`
        info.appendChild(balanceSheetAnuualReportsTitle)
        const annualReports = balanceSheetData.annualReports
        const balanceSheetTable = document.createElement('table')
        info.appendChild(balanceSheetTable)
        balanceSheetTable.classList.add('table')
        balanceSheetTable.classList.add('table-info')
        const balanceSheetTableBody = document.createElement('tbody')
        balanceSheetTable.appendChild(balanceSheetTableBody)
        annualReports.forEach(report => {
            for(const item in report) {
                const balanceSheettr = document.createElement('tr')
                balanceSheetTableBody.appendChild(balanceSheettr)
                const balanceSheetTableCellHead = document.createElement('th')
                balanceSheetTableCellHead.setAttribute('scope', 'row')
                balanceSheettr.appendChild(balanceSheetTableCellHead)
                balanceSheetTableCellHead.textContent = item
                const balanceSheetTableData = document.createElement('td')
                balanceSheetTableData.textContent = report[item]
                balanceSheettr.appendChild(balanceSheetTableData)
            }
            const breakLine = document.createElement('a')
            breakLine.classList.add('btn')
            breakLine.classList.add('btn-primary')
            breakLine.classList.add('disabled')
            breakLine.classList.add('placeholder')
            breakLine.classList.add('col-4')
            balanceSheetTableBody.appendChild(breakLine)
        })
    } else {
        const h1 = document.createElement('h1')
        h1.textContent = 'No Content, Try Again !!!'
        info.appendChild(h1)
    }

}

const renderCashFlow = (cashFlowData) => {
    if(cashFlowData['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const info = document.getElementById('info')
    if(Object.keys(cashFlowData).length) {
        const cashFlowAnuualReportsTitle = document.createElement('h1')
        cashFlowAnuualReportsTitle.textContent = `Annual Reports for ${cashFlowData.symbol}:`
        info.appendChild(cashFlowAnuualReportsTitle)
        const annualReports = cashFlowData.annualReports
        const cashFlowTable = document.createElement('table')
        info.appendChild(cashFlowTable)
        cashFlowTable.classList.add('table')
        cashFlowTable.classList.add('table-info')
        const cashFlowTableBody = document.createElement('tbody')
        cashFlowTable.appendChild(cashFlowTableBody)
        annualReports.forEach(report => {
            for(const item in report) {
                const cashFlowtr = document.createElement('tr')
                cashFlowTableBody.appendChild(cashFlowtr)
                const cashFlowTableCellHead = document.createElement('th')
                cashFlowTableCellHead.setAttribute('scope', 'row')
                cashFlowtr.appendChild(cashFlowTableCellHead)
                cashFlowTableCellHead.textContent = item
                const cashFlowTableData = document.createElement('td')
                cashFlowTableData.textContent = report[item]
                cashFlowtr.appendChild(cashFlowTableData)
            }
            const breakLine = document.createElement('a')
            breakLine.classList.add('btn')
            breakLine.classList.add('btn-primary')
            breakLine.classList.add('disabled')
            breakLine.classList.add('placeholder')
            breakLine.classList.add('col-4')
            cashFlowTableBody.appendChild(breakLine)
        })
    } else {
        const h1 = document.createElement('h1')
        h1.textContent = 'No Content, Try Again !!!'
        info.appendChild(h1)
    }

}

const renderExchangeRate = (exchangeRateData) => {
    if(exchangeRateData['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const info = document.getElementById('info')
    const h1 = document.createElement('h1')
    if(exchangeRateData) {
        h1.textContent = `Excchange Rate = ${exchangeRateData['Realtime Currency Exchange Rate']['5. Exchange Rate']}`
        info.appendChild(h1)
    } else {
        h1.textContent = 'No Content, Try Again !!!'
    }
}

const renderCommodityAndEconomicIndicators = (data) => {
    if(data['Error Message']) {
        handleErr()
        return
    }
    clearInfo()
    const metaData = {}
    const prices = data.data
    metaData.interval = data.interval
    metaData.name = data.name
    metaData.unit = data.unit
    const metaDataTitle = document.createElement('h1')
    metaDataTitle.textContent = 'Meta Data'
    info.appendChild(metaDataTitle)
    const metaDataTable = document.createElement('table')
    info.appendChild(metaDataTable)
    metaDataTable.classList.add('table')
    metaDataTable.classList.add('table-info')
    const metaDatatableBody = document.createElement('tbody')
    metaDataTable.appendChild(metaDatatableBody)
    for(const key in metaData) {
        const metaDatatr = document.createElement('tr')
        metaDatatableBody.appendChild(metaDatatr)
        const metaDatatableCellHead = document.createElement('th')
        metaDatatableCellHead.setAttribute('scope', 'row')
        metaDatatr.appendChild(metaDatatableCellHead)
        metaDatatableCellHead.textContent = key
        const metaDatatableData = document.createElement('td')
        metaDatatableData.textContent = metaData[key]
        metaDatatr.appendChild(metaDatatableData)
    }
    const breakLine = document.createElement('a')
    breakLine.classList.add('btn')
    breakLine.classList.add('btn-primary')
    breakLine.classList.add('disabled')
    breakLine.classList.add('placeholder')
    breakLine.classList.add('col-4')
    info.appendChild(breakLine)

    const h1 = document.createElement('h1')
    h1.textContent = data.name
    info.appendChild(h1)

    const columns = Object.keys(prices[0])
    const table = document.createElement('table')
    table.classList.add('table')
    table.classList.add('table-primary')
    info.appendChild(table)
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    thead.appendChild(tr)
    table.appendChild(thead)
    const th = document.createElement('th')
    th.setAttribute('scope', 'col')
    th.textContent = 'Item'
    tr.appendChild(th)
    columns.forEach(col => {
        const th = document.createElement('th')
        th.setAttribute('scope', 'col')
        th.textContent = col
        tr.appendChild(th)
    })

    const tbody = document.createElement('tbody')
    tbody.classList.add('table-secondary')
    table.appendChild(tbody)
    let count = 1
    prices.forEach(price => {
        const tr = document.createElement('tr')
        const th = document.createElement('th')
        th.setAttribute('scope', 'row')
        th.textContent = count++
        tr.appendChild(th)
        tbody.appendChild(tr)
        for(const key in price) {
            const td = document.createElement('td')
            td.textContent = price[key]
            tr.appendChild(td)
        }
    })
}


