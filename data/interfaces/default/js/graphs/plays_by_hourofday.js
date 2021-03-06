var hc_plays_by_hourofday_options = {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
        renderTo: 'chart_div_plays_by_hourofday'
    },
    title: {
        text: ''
    },
    plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
    legend: {
        enabled: true,
        itemStyle: {
            font: '9pt "Open Sans", sans-serif',
            color: '#A0A0A0'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#444'
        }
    },
    credits: {
        enabled: false
    },
    colors: ['#F9AA03', '#FFFFFF'],
    xAxis: {
            categories: [{}]
    },
    yAxis: {
            title: {
                text: null
            }
    },
    tooltip: {

    },
    series: [{}]
};