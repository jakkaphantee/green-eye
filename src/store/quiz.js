const state = () => ({
  quizList: {
    group1: [
      {
        id: '1',
        name: 'คุณรู้สึกขุ่นเคืองเวลาเห็นคนมีความรัก',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q1_1.gif?alt=media&token=cdb236d6-368f-4755-bed0-3ba4afbb53c2'
      },
      {
        id: '2',
        name: 'คุณชอบอวดคู๋รักของคุณในโซเชียล',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q1_2.gif?alt=media&token=7ed09ac9-f32a-4dd2-bbfe-f963d635065b'
      },
      {
        id: '3',
        name: 'คุณเป็นผู้ฟังมากกว่าผู้พูด',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q1_3.gif?alt=media&token=700540e0-9405-4892-b3b3-9e0dc2fe837b'
      },
      {
        id: '4',
        name: 'คุณรู้สึกโกรธหรือเสียใจเวลาคนรักของคุณไม่สามารถทำตามที่คุณหวังไว้',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q1_4.gif?alt=media&token=094254a0-39df-4c3a-acd2-ca920397ae40'
      },
      {
        id: '5',
        name: 'คุณมักจะรู้สึกกังวลเวลาอยู่ตัวคนเดียว',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q1_5.gif?alt=media&token=5c0353f8-0fdd-4c75-9e82-0eea084a343b'
      },
      {
        id: '6',
        name: 'คุณชื่อชมคู่รักคู่อื่นบ่อยครั้ง',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q1_6.gif?alt=media&token=b073d123-1353-4bac-a3fc-019eab476765'
      },
    ],
    group2: [
      {
        id: '7',
        name: 'คุณอยากมีอำนาจเหนือผู้อื่น',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q2_1.gif?alt=media&token=9f4d1e78-282a-4ee2-8757-30814adbf224'
      },
      {
        id: '8',
        name: 'ผู้อื่นไม่ยอมรับในตัวคุณว่่าคุณเป็นคนทำงานได้ดี',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q2_2.gif?alt=media&token=b283b0ce-4ae8-4269-aacd-3001cbcc0da2'
      },
      {
        id: '9',
        name: 'คุณมักถ่อมตัวเวลาผู้อื่นกล่าวชมว่าคุณทำงานได้ดี',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q2_3.gif?alt=media&token=9a172431-27b2-409f-9ae6-350195cec52b'
      },
      {
        id: '10',
        name: 'คุณชื่นชมผู้ที่ทำงานเก่งกว่าบ่อยครั้ง',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q2_4.gif?alt=media&token=24f7e98b-eb80-4a99-835c-a42844381fdd'
      },
      {
        id: '11',
        name: 'คุณยอมรับความผิดของตน',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q2_5.gif?alt=media&token=66ed3da7-fde3-449d-a999-fc54f6bd605b'
      },
      {
        id: '12',
        name: 'คุณมีความพยายามในการทำงานที่ยากลำบาก',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q2_6.gif?alt=media&token=3c8f6df2-0b81-461c-8a6f-4a0554125d74'
      },
    ],
    group3: [
      {
        id: '13',
        name: 'คุณพยายามทำตามเป้าหมายที่ตนเองตั้งไว้',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q3_1.gif?alt=media&token=d3d9dc70-9181-404a-b380-af8aecd0a407'
      },
      {
        id: '14',
        name: 'คุณภูมิใจที่เป็นตัวเอง',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q3_2.gif?alt=media&token=d7fc01de-f231-4ad1-b033-a05c476288bc'
      },
      {
        id: '15',
        name: 'คุณสามารถเผชิญความเครียดและความกดดันได้',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q3_3.gif?alt=media&token=8bdbd7d3-f592-4f01-a85f-b715f4ae46b5'
      },
      {
        id: '16',
        name: 'คุณรักตนเอง',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q3_4.gif?alt=media&token=5fbc73e2-6497-457a-bed6-01b027931fac'
      },
      {
        id: '17',
        name: 'คุณมีความมั่นใจ เมื่อต้องตัดสินใจ',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q3_5.gif?alt=media&token=c0fa84fa-8a3b-4294-8a26-4beb58dc5c30'
      },
      {
        id: '18',
        name: 'คุณรู้สึกด้อยค่า',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q3_6.gif?alt=media&token=eb297d5b-04ff-4838-a965-5b5d94108758'
      },
    ],
    group4: [
      {
        id: '19',
        name: 'คุณมักรู้สึกเคืองเมื่อเห็นผู้อื่นใช้ของแบรนด์เนมหรือของที่ดูดีกว่าของตน',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q4_1.gif?alt=media&token=60c4da2e-8af3-4c6d-8d00-13c0ec788220'
      },
      {
        id: '20',
        name: 'คุณน้อยใจเวลาไม่ได้กินอาหารมีราคา',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q4_2.gif?alt=media&token=cb7a7102-4429-4204-b80c-e66e4f67f77c'
      },
      {
        id: '21',
        name: 'คุณมักบอกเพื่อนเวลาคุณได้ของใหม่',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q4_3.gif?alt=media&token=d1075c3e-3064-4f46-8260-34ebf598ca2f'
      },
      {
        id: '22',
        name: 'คุณใช้ของราคาแพงเพื่อเป็นที่ยอมรับของผู้อื่น',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q4_4.gif?alt=media&token=f636ea7a-6910-4494-add9-b8c48daa8209'
      },
      {
        id: '23',
        name: 'คุณมักวิจารณ์ผู้ที่ใช้ของราคาแพง',
        type: '1',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q4_5.gif?alt=media&token=82f2abe8-73dc-414a-bf2a-224e53056512'
      },
      {
        id: '24',
        name: 'คุณพอใจในสิ่งที่ตนเองมี',
        type: '2',
        mediaSource: 'https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/Q4_6.gif?alt=media&token=7a92b01a-3858-4029-b6b4-07ddb16ce684'
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
