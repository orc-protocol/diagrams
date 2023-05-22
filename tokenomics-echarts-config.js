option = {
    title: {
      text: 'ORC Protocol Tokenomics',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        fontSize: '18px'
      }
    },
    series: [
      {
        name: 'ORC Protocol Tokenomics',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 97, name: 'Community Users:  97%' },
          { value: 1.5, name: 'ORC Protocol Foundation: 1.5%' },
          { value: 1.5, name: 'Dev Grants Pool: 1.5%' },
        ]
      }
    ]
  };