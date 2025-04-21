import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import fs from 'fs';
import path from 'path';

// Google Cloud TTS 클라이언트 초기화
const client = new TextToSpeechClient();

export default async function handler(req, res) {
  const { text, fileName } = req.body;  // 요청 바디에서 텍스트와 파일명을 받음
  const outputPath = path.join(process.cwd(), 'public', 'audio', `${fileName}.mp3`);

  // TTS API 요청 객체
  const request = {
    input: { text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' }, // 미국식 영어, 중성
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    // TTS API 호출
    const [response] = await client.synthesizeSpeech(request);

    // 음성 파일 저장
    fs.writeFileSync(outputPath, response.audioContent, 'binary');
    
    // 성공적으로 생성된 파일에 대한 응답
    res.status(200).json({ message: 'Audio created successfully', audioUrl: `/audio/${fileName}.mp3` });
  } catch (error) {
    console.error('Error generating audio:', error);
    res.status(500).json({ message: 'Error generating audio' });
  }
}
