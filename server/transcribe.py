import assemblyai as aai

aai.settings.api_key = "a7bd2f2d071e4b2f8545f13ab232ee64"

audio_url = "uploads/recording.wav"

transcriber = aai.Transcriber()

transcript = transcriber.transcribe(audio_url)

print(transcript.text)