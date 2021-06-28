const state = () => ({
  quizList: {
    group1: [
      {
        id: '1',
        name: 'คุณรู้สึกขุ่นเคืองเวลาเห็นคนมีความรัก',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q1_1.gif'
      },
      {
        id: '2',
        name: 'คุณชอบอวดคู่รักของคุณในโซเชียล',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q1_2.gif'
      },
      {
        id: '3',
        name: 'คุณเป็นผู้ฟังมากกว่าผู้พูด',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q1_3.gif'
      },
      {
        id: '4',
        name: 'คุณรู้สึกโกรธหรือเสียใจเวลาคนรักของคุณไม่สามารถทำตามที่คุณหวังไว้',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q1_4.gif'
      },
      {
        id: '5',
        name: 'คุณมักจะรู้สึกกังวลเวลาอยู่ตัวคนเดียว',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q1_5.gif'
      },
      {
        id: '6',
        name: 'คุณชื่อชมคู่รักคู่อื่นบ่อยครั้ง',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q1_6.gif'
      },
    ],
    group2: [
      {
        id: '7',
        name: 'คุณอยากมีอำนาจเหนือผู้อื่น',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q2_1.gif'
      },
      {
        id: '8',
        name: 'ผู้อื่นไม่ยอมรับในตัวคุณว่่าคุณเป็นคนทำงานได้ดี',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q2_2.gif'
      },
      {
        id: '9',
        name: 'คุณมักถ่อมตัวเวลาผู้อื่นกล่าวชมว่าคุณทำงานได้ดี',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q2_3.gif'
      },
      {
        id: '10',
        name: 'คุณชื่นชมผู้ที่ทำงานเก่งกว่าบ่อยครั้ง',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q2_4.gif'
      },
      {
        id: '11',
        name: 'คุณยอมรับความผิดของตน',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q2_5.gif'
      },
      {
        id: '12',
        name: 'คุณมีความพยายามในการทำงานที่ยากลำบาก',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q2_6.gif'
      },
    ],
    group3: [
      {
        id: '13',
        name: 'คุณพยายามทำตามเป้าหมายที่ตนเองตั้งไว้',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q3_1.gif'
      },
      {
        id: '14',
        name: 'คุณภูมิใจที่เป็นตัวเอง',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q3_2.gif'
      },
      {
        id: '15',
        name: 'คุณสามารถเผชิญความเครียดและความกดดันได้',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q3_3.gif'
      },
      {
        id: '16',
        name: 'คุณรักตนเอง',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q3_4.gif'
      },
      {
        id: '17',
        name: 'คุณมีความมั่นใจ เมื่อต้องตัดสินใจ',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q3_5.gif'
      },
      {
        id: '18',
        name: 'คุณรู้สึกด้อยค่า',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q3_6.gif'
      },
    ],
    group4: [
      {
        id: '19',
        name: 'คุณมักรู้สึกเคืองเมื่อเห็นผู้อื่นใช้ของแบรนด์เนมหรือของที่ดูดีกว่าของตน',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q4_1.gif'
      },
      {
        id: '20',
        name: 'คุณน้อยใจเวลาไม่ได้กินอาหารมีราคา',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q4_2.gif'
      },
      {
        id: '21',
        name: 'คุณมักบอกเพื่อนเวลาคุณได้ของใหม่',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q4_3.gif'
      },
      {
        id: '22',
        name: 'คุณใช้ของราคาแพงเพื่อเป็นที่ยอมรับของผู้อื่น',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q4_4.gif'
      },
      {
        id: '23',
        name: 'คุณมักวิจารณ์ผู้ที่ใช้ของราคาแพง',
        type: '1',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q4_5.gif'
      },
      {
        id: '24',
        name: 'คุณพอใจในสิ่งที่ตนเองมี',
        type: '2',
        mediaSource: 'https://green-eye.s3.ap-southeast-1.amazonaws.com/Q4_6.gif'
      },
    ]
  },
  userScore: 0,
  sectionScore: {
    group1: 0,
    group2: 0,
    group3: 0,
    group4: 0,
  }
})

const getters = {
  maxScoreGroup: (state) => {
    const allScore = [
      state.sectionScore.group1,
      state.sectionScore.group2,
      state.sectionScore.group3,
      state.sectionScore.group4
    ]
    let maxScore = 0
    let maxScoreIndex = 0
    allScore.map((score, index) => {
      if (score > maxScore) {
        maxScore = score
        maxScoreIndex = index
      }
    })
    switch (maxScoreIndex) {
      case 0: {
        return 'group1'
      }
      case 1: {
        return 'group2'
      }
      case 2: {
        return 'group3'
      }
      case 3: {
        return 'group4'
      }
    }
    return ''
  }
}

const mutations = {
  addScore: (state, { score, currentGroup }) => {
    state.userScore += score
    switch (currentGroup) {
      case '1': {
        state.sectionScore.group1 += score
        break
      }
      case '2': {
        state.sectionScore.group2 += score
        break
      }
      case '3': {
        state.sectionScore.group3 += score
        break
      }
      case '4': {
        state.sectionScore.group4 += score
        break
      }
    }
  },
  resetScore: (state) => {
    state.userScore = 0
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
}
