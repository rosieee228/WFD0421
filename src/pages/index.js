import { useState, useEffect, useRef } from "react"; // useRef를 import 추가

// 문장 목록 (업로드한 PDF 문장을 사용)
const sentences = [
  'The celebrated theory is still the source of great controversy.',
  'A good architectural structure should be useful, durable and beautiful.',
  'A group meeting will be held tomorrow in the library conference room.',
  'A number of students have volunteer jobs.',
  'Educational level is found to be related to social and economic background.',
  'We can all meet at my office after the lecture.',
  'Tutorials are scheduled in the final week of the term.',
  'You can make an appointment to meet the librarian.',
  'Agenda items should be submitted by the end of the day.',
  'All dissertations must be accompanied by a submission form.',
  'All industries are a system of inputs, processes, outputs and feedback.',
  'All of the assignments must be submitted in person to the faculty office.',
  'Economic development needs to be supported by the government.',
  'All of your assignments are due by tomorrow.',
  'Our view is that educational reforms have been inadequately implemented.',
  'Although sustainable development is not easy, it is an unavoidable responsibility.',
  'Americans have typically defined the process of plant growth in quantitative terms.',
  'An introduction is an essential element of presentation.',
  'The assignments should be submitted to the department office before the deadlines.',
  'Students will develop confidence in their ability to think critically.',
  'Consumer confidence has a direct influence on sales.',
  'Convincing evidence to support this theory is hard to obtain.',
  'Despite their differences, all forms of life share certain characteristics.',
  'Economic problems caused a big rise in unemployment.',
  'The economic status of the early Roman Republic will be examined.',
  'The academic strength of the early Roman Republic will be examined.',
  'Tomorrow\'s lecture has been canceled due to the power cut.',
  'Students are permitted to park at campus parking spaces.',
  'It is really a comprehensive program covering both theory and practice.',
  'We are researching the most significant challenges that are faced in our society today.',
  'Medical researchers have focused on causes of diseases and treatments.',
  'Native speakers are exempt from the language tests in their own language.',
  'Nurses can specialize in clinical work or management.',
  'Organizational failure is considered from various perspectives in academic literature.',
  'Our professor is hosting the business development conference.',
  'The university theater group will be performing in the concert hall.',
  'Peer group pressure has a significant effect on young people.',
  'Remember, the prestigious election of stewardship has strict eligibility criteria.',
  'The speaker began by giving an outline of her presentation.',
  'She has made a significant contribution to the field of chemistry.',
  'Many departments have their own special book collections.',
  'Statistical results should be expressed in different ways depending on the circumstances.',
  'You are advised to use multiple research methods for this project.',
  'Students requiring an extension should apply sooner rather than later.',
  'Textile manufacturing plays a large role in improving economies.',
  'Food that contains antibiotics provides little or no nutritional value.',
  'A bar chart provides a useful means of data comparison.',
  'The archeologists were astonished by the previously overlooked foundations.',
  'New developments in technology are influencing current research.',
  'Most known oil reserves will only last for half a century.',
  'The designers will complete the plan later today.',
  'Rising inflation may indicate an increase in the demand for consumer products.',
  'The faculty staff are very approachable, friendly and extremely helpful.',
  'The garden behind the university is open to the public in summer.',
  'The key findings seemed to contradict our initial hypothesis.',
  'The railway makes long-distance travel possible for everyone.',
  'The results of the study underscored the importance of early detection.',
  'The summer course is canceled due to insufficient enrollment.',
  'Assignments must be submitted at the end of the term.',
  'The new technician dropped the microscope in the biology lab.',
  'The theme of the instrumental work exhibits more of a demure compositional style.',
  'The visiting speaker used to be a lecturer in this department.',
  'The ways in which people communicate are constantly changing.',
  'There is a clear need for further research in this field.',
  'There is clearly a need for further research in this field.',
  'Our laboratory equipment is provided free of charge.',
  'Traveling by boat on the river is not possible in winter.',
  'It would be extremely beneficial to work together.',
  'This project is divided into four main sections.',
  'Understanding how to use the library will save your time.',
  'University fees are expected to increase next year.',
  'We can work together to achieve high educational standard.',
  'Parents’ talk to children tends to be simplified.',
  'The essay is easy to write once the research is completed.',
  'Find out how to get resources before your research.',
  'Global connections thrived in academic communities, thanks to social media.',
  'The theater study course encourages students to exercise creativity.',
  'There are opportunities to receive grants in most artistic fields.',
  'This course considerably emphasizes critical thinking skills.',
  'Those who are considering a career in marketing should attend the talk.',
  'Every student has both the right and the ability to succeed.',
  'The university has invested in new technologies designed to support learning.',
  'A good research assistant is not afraid to ask questions.',
  'Collaboration between departments is a feature of successful companies.',
  'Experts are now able to forecast weather over a much longer period.',
  'Making mistakes is fine as long as you learn from them.',
  'Archeologists discovered tools and other artifacts near the ancient tomb.',
  'We have a lecture in the morning on Thursday.',
  'Thousands of people turned out to be at the presidential address.',
  'The plight of local wildlife has been ignored by developers.',
  'A professor took one year off to work on her book.',
  'The site is designed to be highly interactive.',
  'The lecture tomorrow will discuss the educational policy of the United States.',
  'You should submit your term papers to the general office.',
  'Key business partners are often intertwined in expense accounts.',
  'Biology involves the study of life at all levels.',
  'Food has become a political issue in the world.',
  'All medical students must clean their hands before entering the room.',
  'Implementation figures are expected to be improved in the next few years.',
  'The quality of your statistical information depends on your raw data.',
  'Certain organisms can reproduce using just one parent.',
  'Protective clothing must always be worn in the laboratory.',
  'Sound waves are unable to travel through vacuum.',
  'Make sure you choose a course that provides great career opportunities.',
  'Undergraduates have a wide range of cultural modules to choose from.',
  'Social media is criticized for causing internet addiction.',
  'The researchers are disappointed that the results of the research have been proved to be inconclusive.',
  'We hold visiting hours throughout the year for students.',
  'International exchange formed the important part of our study program.',
  'Food containing ample calories provides little or no nutritional value.',
  'Make sure you’ve saved all files before turning off the computer.',
  'Many vocational courses at institutions are funded by private enterprises.',
  'This book can be borrowed for a maximum of one week.',
  'This essay will argue that technology does more good than harm.',
  'Distance learning allows you to develop a career around your commitments.',
  'The history department is very active in research.',
  'Every student has regular meetings with his or her personal tutor.',
  'Graphs and charts allowed data to be more easily understood.',
  'The coffee machine located on the third floor is not working today.',
  'Muscle cells bring parts of the body closer together.',
  'You will learn how to rationally assess your arguments.',
  'It takes a long time to walk to university.',
  'University staff provide advice on renting and accommodation.',
  'Slides and handouts can be downloaded after lectures.',
  'Business practices must obey contemporary general regulations.',
  'The news will not be received until the following week.',
  'We can see the stars that were formed thirteen billion years ago.',
  'As student union members, you can influence and change our university.',
  'The horizontal line on the graph indicates that there was no change in the period.',
  'Purity is one feature that makes gold expensive.',
  'Even simple techniques need to be practiced to become better.',
  'Studying history can help you better understand the present.',
  'Many food crops require large amounts of water and fertilizer.',
  'The course covers architecture planning and construction on the international scale.',
  'Imported default packages are likely to be used for most computers.',
  'Studying medicine allows for a wide range of career opportunities.',
  'Classical mechanics is sometimes considered as a branch of applied mathematics.',
  'The deadline for the marketing assignment has been extended.',
  'This course aims to develop your knowledge of statistics.',
  'Eating fish twice a week is recommended for a healthy diet.',
  'Information technology has changed the way people study today.',
  'The library will stay open until midnight this week.',
  'Two sides have disagreed on how to solve the problem.',
  'The very basic feature of computing would be counting and calculating.',
  'Babies can distinguish between what is language and what is not.',
  'Psychologists say that what we have experienced influences our behaviors.',
  'Many university lectures can now be viewed on the internet.',
  'Urbanization provides the expenses of other communities.',
  'Students are required to have an undergraduate degree in Biology to be enrolled in this course.',
  'Philosophy uses logic and reasons to analyze human experiences.',
  'Field trips are an essential part of geography courses.',
  'Please return the reference book to the correct position on the library shelf.',
  'Undergraduate students can select what interests them the most in the science program.',
  'Providers of higher education treat plagiarism extremely seriously.',
  'Extracurricular activities can help students develop more talents.',
  'The government is funding a research study on the consequences of unemployment.',
  'There are many different styles of business management.',
  'The digital camera has some advantages over traditional film.',
  'The university provides excellent leisure facilities for students and staff.',
  'The history of economics is a tricky subject to study.',
  'Undergraduates may pursue their specific interests within certificate programs.',
  'Air pollution is a serious problem all over the world.',
  'Urban planning emphasizes efficiency and expansion of communities.',
  'The course will start with the history of architecture.',
  'Please note that the seminar has now been canceled.',
  'Scholarship applications must be handed in by the end of this month.',
  'Please return your reference books to the library shelves.',
  'Art and design is a competitive field to work in.',
  'Many diseases that were once serious have now been eradicated.',
  'The urban geography degree includes the study of demography.',
  'Nutrition plays a key role in athletic performance.',
  'Sugar is a solid carbohydrate which is always used to sweeten food.',
  'Our workshops are opening for all students on campus.',
  'Reading histories involves a level of careful selection.',
  'Many universities provide exchange programs to other countries.',
  'The deadline for this assignment is next Wednesday.',
  'City planners recognize the need for accessible public transport options.',
  'There are a variety of different ways to present statistical information.',
  'The degree is taught by using a mixture of lectures and seminars.',
  'The student magazine is looking for a new editor.',
  'Scholarships are available for both local and international students.',
  'Libraries in many areas were closed due to the lack of funding.',
  'Accommodation on campus is limited but there are more options nearby.',
  'All students have their own style of learning.',
  'This course can help to deepen your appreciation of art.',
  'The research shows that spending time outdoors has a range of benefits.',
  'Career mobility is very important for new graduates.',
  'The amount of time spent on configuration varies considerably.',
  'Academic journals are usually edited by subject specialists.',
  'Our company must have independent financial auditing.',
  'Please make sure your applications follow the guideline provided.',
  'Understanding visual media has never been more challenging.',
  'An essay should use evidence from both primary and secondary sources.',
  'A surprisingly large number of students applied for that course.',
  'The university library holds a number of collections of geological maps.',
  'Students are encouraged to read new books recommended by Professor Jones.',
  'We help individuals to develop and follow their interests.',
  'Our company currently employs more than ten thousand people worldwide.',
  'It is clear that the human population has an impact on the environment.',
  'It is an integrated course with several main elements.',
  'The public is often misled by biased coverage.',
  'The extent of advertising to children is very much open to debate.',
  'The closing date of applications for travel scholarships is next Monday.',
  'The university\'s main library will be open till midnight next Saturday.',
  'Students may only park their cars in authorized university parking spaces.',
  'We help students to develop their individualities and follow their interests.',
  'Many universities are continuously expanding the postgraduate education online learning resources.',
  'Our aim is to transmit mathematics teaching in the classroom.',
  'Experts said reading and listening to music can reduce stress.',
  'The night sky has always involved mystery and wonder.',
  'Please refer to the guidelines for more information on setting goals.',
  'The terms, illness and disease, are confusing despite clear differences.',
  'Every living thing begins as a single cell.',
  'The very basic definition of computing would be counting and calculating.',
  'These words recognized the excellence of the undergraduates’ research projects.',
  'Technology is no longer a simple tool that we can control.',
  'The teaching staff are actively engaged in the original research.',
  'There is no economic reason why public borrowing is necessarily bad.',
  'For the purpose of the research, data should be collected and analyzed.',
  'The deadline for the submission of this assignment is tomorrow.',
  'We are phasing out disposable cups on campus.',
  'British students must study mathematics at secondary schools.',
  'He wrote poetry and plays as well as scientific papers.',
  'You need to hand in an essay next semester.',
  'Scientific experiments should be repeated to verify the results.',
  'We are more able to accommodate postgraduate students than previously possible.',
  'The study of history can provide unique insight.',
  'Please click on the logo above to enter the site.',
  'Parents are financially responsible for their children right up until they reach adulthood.',
  'If you need a parking ticket, see me after the lecture.',
  'The untapped potential of using sunray is phenomenal.',
  'Students are encouraged to think carefully about their accommodation needs.',
  'Peer review is an essential part of scientific methods.',
  'Advanced technology created growth in the economy.',
  'Lecture outlines are available on the college internal website.',
  'The local government has adopted a plan for infrastructure development.',
  'This course places considerable emphasis on critical thinking skills.',
  'A typical part of the course involves the study of society.',
  'Optional tutorials are offered in the final week of the term.',
  'Banks charge interest on the money they lend to customers.',
  'The aim of the course is to encourage students to develop their creativity.',
  'Scientists have founded all parts of society today.',
  'Physics is the key subject to understanding the world and the universe.',
  'Practical experience is a vital part of legal training.',
  'This new camera can identify your eyes and focus on them.',
  'Recession triggers exciting creativity and high rates of public wisdom.',
  'Students will focus on reporting news on changing the media world.',
  'Globalization has been an overwhelming urbanization phenomenon.',
  'The other book isn\'t thorough, but it\'s more insightful.',
  'Art is an expression of creative skills and imagination.',
  'Building trust is not something that can be achieved overnight.',
  'An architect is required to have problem-solving skills and an eye for design.',
  'The lecture will take place in the main hall.',
  'The university will cease the colossal renovation of the faint empty theater.',
  'A wide range of courses covered different aspects in this subject.',
  'In his lifetime, he composed a large number of works.',
  'The exam application system has been upgraded for professional exams.',
  'In addition to class requirements, students must pass all the qualifying examinations.',
  'New media have transcended traditional national boundaries.',
  'Please confirm that you have received the textbook.',
  'The marketing budget has been doubled since the beginning of the year.',
  'We encourage students to complete their applications before the deadline.',
  'I will come back to this in a moment.',
  'The curriculum should be adjusted to incorporate recent developments.',
  'The student shop sells a range of stationery.',
  'Let me give you an example to explain what I mean.',
  'Tutors should set clear goals at the start of the class.',
  'She began by giving an outline of the previous lecture.',
  'Strangely, people are simultaneously impressed by and skeptical about statistics.',
  'Many students live in the hall of residence in term time.',
  'The timetable for the next term will be available next week.',
  'Most of the lectures begin punctually, so do not be late.',
  'The stock market crash had repercussions throughout the world.',
  'The student union hosts a variety of social events.',
  'Default designed packages are likely to be used for most computers.',
  'The museum is closed on the third Monday of every month.',
  'Some people believe that education should be free to everyone.',
  'Formal conclusions could be established through rigorous experiments.',
  'Our faculty includes five libraries across the university.',
  'The reception staff can give advice on renting private accommodation.',
  'Muscles bring parts of the body close together.',
  'The library will be closed for staff training tomorrow morning.',
  'Too much information may have been avoided by the group research design.',
  'The biology department is respected in research activities.',
  'Critical thinking is an essential component of a broad education.',
  'The English degree involves work placements in the third year.',
  'Technologies have enormously transformed the lifestyle of the majority.',
  'A regional assembly was moved to the devolution of power.',
  'Scientists recognize different ice types according to the water molecule content.',
  'Having a strong motivation is important to achieve your goals.',
  'It is interesting to observe the development of the language skills of toddlers.',
  'Children start producing words before they are able to walk.',
  'The skills of a great stage actor cannot be taught.',
  'The jobs tomorrow will require higher skill levels.',
  'The goal of the government policy is to increase the investments.',
  'Social media is responsible for helping the government to solve social problems.',
  'The university library has a collection of early geography maps.',
  'Courses are assessed by group work and individual assignments.',
  'Online courses allow students to work at their own pace.',
  'Businesses must adapt to the general data protection regulations.',
  'The internet has transformed the nature of publishing.',
  'More research is required in the field of food science.',
  'Many important policies need to be made.',
  'The academic tradition of the school ensures excellence.',
  'For the small business, making profit is the main priority.',
  'Agricultural development plays a vital role in rural areas.',
  'The new research has produced some unexpected results.',
  'The falling birth rate means the number of students dropped.',
  'We hold visiting tours throughout the year for undergraduate students.',
  'Rising inflation leads to increasing goods prices and decreasing demand for products.',
  'When sentencing, the court will decide whether the defendant regrets his actions.',
  'Employment figures will decrease in the next few years.',
  'Each faculty has a dedicated specialized librarian available in the term examination.',
  'Criminal charges will be brought against all of the men.',
  'We are continuing to provide postgraduate online learning resources.',
  'The study is among the initial projects funded by the university.',
  'Writing history needs a careful selection process of historical sources.',
  'Medical books and journals have been moved to the second floor.',
  'Gold is a metal that appears naturally and in a pure state.',
  'Your tutor will show you how to prepare the essay.',
  'Mental health professionals are talking about the topic of vulnerability.',
  'Music has the ability to shape our emotions.',
  'Your tutor will provide the guidance on how to structure the essays.',
  'Extension requirement for the assignment must be submitted before the deadline.',
  'Some studies show the link between depression and social media.',
  'Please check the information on the website for the opening times.',
  'His proposal had gained further support by the local community.',
  'Affordable housing is an important issue for all members of society.',
  'Conferences ought to be always scheduled two weeks in advance.',
  'The massive accumulation of data was converted into a communicable argument.',
  'We support the research on problems related to tropical cyclone dynamics and forecasting.',
  'Practical experiments are a central part of the chemistry course.',
  'There is a pharmacy on campus near the bookstore.'
];

export default function Home() {
  const [userInputs, setUserInputs] = useState(Array(sentences.length).fill("")); // 각 문장에 대한 답 입력 상태
  const [answerColors, setAnswerColors] = useState(Array(sentences.length).fill([])); // 각 문장의 단어별 색상 상태
  const [opacity, setOpacity] = useState(100); // 문장 투명도 상태
  const [bookmarked, setBookmarked] = useState(Array(sentences.length).fill("")); // 각 문장에 대한 북마크 상태  
  const [accent, setAccent] = useState("US"); // 기본 값: US (미국 발음)
  const [selectedGender, setSelectedGender] = useState("FEMALE"); // 기본 값: FEMALE
  const [speed, setSpeed] = useState(1.0); // 속도 설정
  const [autoPlay, setAutoPlay] = useState(false); // 자동 재생 여부
  const [bookmarkEmoji, setBookmarkEmoji] = useState(""); // 북마크 이모티콘 상태
  const [correctAnswerColors, setCorrectAnswerColors] = useState(Array(sentences.length).fill([])); // 정답 문장의 색상 상태
  const [userInputColors, setUserInputColors] = useState(Array(sentences.length).fill([])); // 사용자 입력 색상 상태
  const [showAnswer, setShowAnswer] = useState(Array(sentences.length).fill(false)); // 정답 문장 표시 여부
  const [selectedBookmark, setSelectedBookmark] = useState(""); // 선택된 북마크 아이콘 상태

  // 자동 재생 기능
  useEffect(() => {
    if (autoPlay && sentences.length > 0) {
      const interval = setInterval(() => {
        const nextSentence = sentences[0]; // 첫 번째 문장
        const audio = new Audio(`/audio/${accent}_${selectedGender}_sentence_1.mp3`); // 첫 번째 음성 파일 재생
        audio.play();
      }, 30000); // 30초 간격

      return () => clearInterval(interval); // cleanup
    }
  }, [autoPlay]);


  // 사용자 입력 처리 및 색상 업데이트
    const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      const input = (userInputs[index] || "").trim();  // 기본값을 빈 문자열로 설정
      const correctAnswer = sentences[index];  // 정답 문장


      // 정답 문장을 단어와 기호로 분리하고, 사용자가 입력한 값도 단어와 기호로 분리
      const correctWordsAndSymbols = correctAnswer.split(/\s+|([.,!?()'"-])/).filter(Boolean); // 빈 문자열 제거
      const inputWordsAndSymbols = input.split(/\s+|([.,!?()'"-])/).filter(Boolean); // 빈 문자열 제거
      
      // 사용자 입력 색상 처리 (정답 문장과 비교)
      const newInputColors = inputWordsAndSymbols.map((word) => {
        if (correctWordsAndSymbols[i] && correctWordsAndSymbols[i] === word) {
          return "blue"; // 정답일 경우 파란색
        } else {
          return "red";  // 정답 문장에 없는 단어는 빨간색
        }
      });

      // 정답 문장 색상 처리 (사용자 입력과 비교)
      const newCorrectColors = correctWordsAndSymbols.map((word) => {
        if (inputWordsAndSymbols[i] && inputWordsAndSymbols[i] === word) {
          return "blue"; // 정답 문장에 일치하는 단어는 파란색
        }
        return "red"; // 틀린 단어는 빨간색
      });

      // 색상 배열 업데이트 (사용자 입력 색상)
      setAnswerColors((prev) => {
        const newColorsArray = [...prev];
        newColorsArray[index] = newInputColors; // 사용자 입력 색상 업데이트
        return newColorsArray;
      });

      // 색상 배열 업데이트 (정답 문장의 색상)
      setCorrectAnswerColors((prev) => {
         const newColorsArray = [...prev];
         newColorsArray[index] = newCorrectColors; // 정답 색상 업데이트
         return newColorsArray;
       });
       
      // 정답 표시 상태 업데이트 (정답 문장을 보여줌)
      const newShowAnswer = [...showAnswer];
      newShowAnswer[index] = true;  // 입력 후 정답 문장 표시
      setShowAnswer(newShowAnswer);
      }
    };  


  
// 단어별로 색상 적용 (getHighlightedText 함수)
const getHighlightedText = (text, index, isAnswer) => {
  const words = sentence.split(/\s+|([.,!?()'"-])/); // 공백과 기호를 기준으로 단어 분리
  const colors = isAnswer ? correctAnswerColors[index] : answerColors[index];

  return words.map((word, i) => {
    const wordColor = colors[i] || "black"; // 각 단어의 색상 적용
    return (
      <span
        key={i}
        style={{
          color: wordColor,
          textDecoration: wordColor === "red" ? "line-through" : "none", // 오답인 경우 취소선 추가
        }}
      >
        {word}{" "}
      </span>
    );
  });
};


  // 사용자 입력 상태 변경
  const handleInputChange = (e, index) => {
    const newInputs = [...userInputs];
    newInputs[index] = e.target.value;
    setUserInputs(newInputs);
  };

  // 음성 재생 함수
  const playAudio = (sentence, index) => {
    const fileName = `en-${accent.toUpperCase()}_${selectedGender}_sentence_${index + 1}.mp3`; // 예: en-US_FEMALE_sentence_1.mp3
    const audioPath = `/audio/${fileName}`; // 동적으로 생성된 음성 파일 경로

    const audio = new Audio(audioPath); // MP3 음성 파일 재생
    audio.play();
  };

  // 북마크 상태 변경
  const toggleBookmark = (index, emoji) => {
    const newBookmarks = [...bookmarked];
    newBookmarks[index] = newBookmarks[index] === emoji ? "" : emoji; // 선택된 아이콘이 이미 있으면 삭제, 아니면 추가
    setBookmarked(newBookmarks);
  };

  // 북마크 드롭다운에서 선택 시 북마크 업데이트
  const handleBookmarkChange = (emoji) => {
    setSelectedBookmark(emoji); // 드롭다운에서 선택된 이모티콘 상태 업데이트
  };

  // 선택된 북마크 아이콘에 맞는 문장들 필터링
  const filteredSentences = selectedBookmark
    ? sentences.filter((sentence, index) => bookmarked[index] === selectedBookmark)
    : sentences;


  return (
    <div className="container">
      {/* 상단 메뉴 */}
      <div className="controls" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ flex: 1 }}>
          <label>Transparency:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Accent:</label>
          <select onChange={(e) => setAccent(e.target.value)} value={accent}>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="AU">AU</option>
            <option value="IN">IN</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label>Gender:</label>
          <select onChange={(e) => setSelectedGender(e.target.value)} value={selectedGender}>
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label>Speed:</label>
          <select onChange={(e) => setSpeed(e.target.value)} value={speed}>
            <option value={1.0}>1.0x</option>
            <option value={1.25}>1.25x</option>
            <option value={1.5}>1.5x</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label>Auto Play:</label>
          <input
            type="checkbox"
            checked={autoPlay}
            onChange={() => setAutoPlay(!autoPlay)}
          />
       </div>
          <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
          <label>Bookmark Emoji:</label>
          <select
            onChange={(e) => handleBookmarkChange(e.target.value)}
            value={selectedBookmark}
            style={{ padding: "5px" }}
        > 
            <option value="">Select Emoji</option>
            <option value="⭐">⭐</option>
            <option value="❤">❤</option>
            <option value="🧡">🧡</option>
            <option value="💛">💛</option>
            <option value="💚">💚</option>
            <option value="💙">💙</option>
            <option value="💜">💜</option>
            <option value="🤎">🤎</option>
            <option value="🖤">🖤</option>
            <option value="🤍">🤍</option>
            <option value="❌">❌</option>
          </select>
        </div>
      </div>

      {/* 문장 목록 */}
      {sentences.map((sentence, index) => (
        <div
          key={index}
          className="sentence"
          style={{
            opacity: opacity / 100, // 문장에만 투명도 적용
            backgroundColor: "white",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        > 
        
          {/* 문장 번호 */}
          <span className="text-gray-500" style={{ marginRight: "10px" }}>{index + 1}. </span>

          {/* 문장 내용 */}
          <div className="cursor-pointer text-blue-500 hover:underline" style={{ display: "inline-block", flexGrow: 1 }}>
            {sentence}
          </div>


          {/* 정답 문장 색상 처리 */}
          <div>{getHighlightedText(sentence, index, true)} {/* 정답 문장 */}</div>

          {/* 문장을 클릭하면 음성 재생 */}
          <div
            onClick={() => playAudio(sentence, index)} // 문장을 클릭하면 음성 재생
            className="cursor-pointer text-blue-500 hover:underline"
            style={{ display: "inline-block", flexGrow: 1 }}
          >
            {getHighlightedText(sentence, index)} {/* 단어별로 색상 적용 */}
          </div>

          {/* 음성 재생 스피커 아이콘 */}
          <button
            onClick={() => playAudio(sentence, index)} // 스피커 아이콘 클릭 시 음성 재생
            style={{
              backgroundColor: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            className="text-blue-500 hover:underline"
          >
            🔊
          </button>

          {/* 정답 입력 */}
          <input
            type="text"
            value={userInputs[index]} // 해당 문장의 답 입력 상태
            onChange={(e) => handleInputChange(e, index)} // 입력 처리
            onKeyPress={(e) => handleKeyPress(e, index)} // Enter 키로 정답 처리
            placeholder="Type here..."
            className="w-3/4 p-2 border border-gray-300 rounded"
            style={{ 
              marginTop: "10px", 
              opacity: 1, // 
            }} // 답 색상은 각 단어별로 동적으로 처리됨
            
            onFocus={() => playAudio(sentence, index)} // 텍스트 입력칸에 포커스되면 음성 재생            
          />

          {/* 입력한 답에 색상 적용 */}
          <div>{getHighlightedText(userInputs[index], index, false)}</div>
    

          {/* 북마크 이모티콘 선택 */}
          <button
            onChange={(e) => toggleBookmark(index, e.target.value)}
            value={bookmarked[index]}
            style={{
              fontSize: "20px",
              backgroundColor: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <option value="">Select Emoji</option>
            <option value="⭐">⭐</option>
            <option value="❤">❤</option>
            <option value="🧡">🧡</option>
            <option value="💛">💛</option>
            <option value="💚">💚</option>
            <option value="💙">💙</option>
            <option value="💜">💜</option>
            <option value="🤎">🤎</option>
            <option value="🖤">🖤</option>
            <option value="🤍">🤍</option>
            <option value="❌">❌</option>
          </select>       
        </div>
      ))}
    </div>
  );
}