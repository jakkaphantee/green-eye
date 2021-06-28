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
        mediaSource: 'q1_3'
      },
      {
        id: '4',
        name: 'คุณรู้สึกโกรธหรือเสียใจเวลาคนรักของคุณไม่สามารถทำตามที่คุณหวังไว้',
        type: '1',
        mediaSource: 'q1_4'
      },
      {
        id: '5',
        name: 'คุณมักจะรู้สึกกังวลเวลาอยู่ตัวคนเดียว',
        type: '1',
        mediaSource: 'q1_5'
      },
      {
        id: '6',
        name: 'คุณชื่อชมคู่รักคู่อื่นบ่อยครั้ง',
        type: '2',
        mediaSource: 'q1_6'
      },
    ],
    group2: [
      {
        id: '7',
        name: 'คุณอยากมีอำนาจเหนือผู้อื่น',
        type: '1',
        mediaSource: ''
      },
      {
        id: '8',
        name: 'ผู้อื่นไม่ยอมรับในตัวคุณว่่าคุณเป็นคนทำงานได้ดี',
        type: '1',
        mediaSource: ''
      },
      {
        id: '9',
        name: 'คุณมักถ่อมตัวเวลาผู้อื่นกล่าวชมว่าคุณทำงานได้ดี',
        type: '2',
        mediaSource: ''
      },
      {
        id: '10',
        name: 'คุณชื่นชมผู้ที่ทำงานเก่งกว่าบ่อยครั้ง',
        type: '2',
        mediaSource: ''
      },
      {
        id: '11',
        name: 'คุณยอมรับความผิดของตน',
        type: '2',
        mediaSource: ''
      },
      {
        id: '12',
        name: 'คุณมีความพยายามในการทำงานที่ยากลำบาก',
        type: '2',
        mediaSource: ''
      },
    ],
    group3: [
      {
        id: '13',
        name: 'คุณพยายามทำตามเป้าหมายที่ตนเองตั้งไว้',
        type: '2',
        mediaSource: ''
      },
      {
        id: '14',
        name: 'คุณภูมิใจที่เป็นตัวเอง',
        type: '2',
        mediaSource: ''
      },
      {
        id: '15',
        name: 'คุณสามารถเผชิญความเครียดและความกดดันได้',
        type: '2',
        mediaSource: ''
      },
      {
        id: '16',
        name: 'คุณรักตนเอง',
        type: '2',
        mediaSource: ''
      },
      {
        id: '17',
        name: 'คุณมีความมั่นใจ เมื่อต้องตัดสินใจ',
        type: '2',
        mediaSource: ''
      },
      {
        id: '18',
        name: 'คุณรู้สึกด้อยค่า',
        type: '1',
        mediaSource: ''
      },
    ],
    group4: [
      {
        id: '19',
        name: 'คุณมักรู้สึกเคืองเมื่อเห็นผู้อื่นใช้ของแบรนด์เนมหรือของที่ดูดีกว่าของตน',
        type: '1',
        mediaSource: ''
      },
      {
        id: '20',
        name: 'คุณน้อยใจเวลาไม่ได้กินอาหารมีราคา',
        type: '1',
        mediaSource: ''
      },
      {
        id: '21',
        name: 'คุณมักบอกเพื่อนเวลาคุณได้ของใหม่',
        type: '1',
        mediaSource: ''
      },
      {
        id: '22',
        name: 'คุณใช้ของราคาแพงเพื่อเป็นที่ยอมรับของผู้อื่น',
        type: '1',
        mediaSource: ''
      },
      {
        id: '23',
        name: 'คุณมักวิจารณ์ผู้ที่ใช้ของราคาแพง',
        type: '1',
        mediaSource: ''
      },
      {
        id: '24',
        name: 'คุณพอใจในสิ่งที่ตนเองมี',
        type: '2',
        mediaSource: ''
      },
    ]
  },
  userScore: 0,
})

const mutations = {
  addScore: (state, score) => {
    state.userScore += score
  },
  resetScore: (state) => {
    state.userScore = 0
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}
