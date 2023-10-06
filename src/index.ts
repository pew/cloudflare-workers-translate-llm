import { Ai } from '@cloudflare/ai'

export interface Env {
  AI: any
}

export default {
  async fetch(request: Request, env: Env) {
    const ai = new Ai(env.AI)
    const payload = await request.json()
    const { text, input, output }: any = payload

    const response = await ai.run('@cf/meta/m2m100-1.2b', {
      text: text,
      source_lang: input ? input : 'english',
      target_lang: output ? output : 'german',
    })

    return new Response(JSON.stringify({ input, output, original_text: text, translated_text: response.translated_text }))
  },
}
