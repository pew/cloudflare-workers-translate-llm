# Cloudflare Workers AI Translate

using Cloudflare Workers AI using the `m2m100-1.2b` model to translate text.

## installation and usage

**installation:**

```shell
npm i
npm run deploy
```

**usage:**

```shell
curl -d '{"text": "hey, how is it going?", "input": "english", "output": "german"}' -H 'content-type: application/json' https://translate.abracadabra.workers.dev
```

output: `{"input":"english","output":"german","original_text":"hey, how is it going?","translated_text":"Hey, wie geht es?"}`

or, just get the translated text using `jq`:

```shell
curl -s -d '{"text": "hey, how is it going?", "input": "english", "output": "german"}' -H 'content-type: application/json' https://translate.abracadabra.workers.dev | jq -r .translated_text
```
