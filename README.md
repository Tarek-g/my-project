# My Project

مشروع بسيط يعتمد على HTML وJavaScript وCSS.

## التشغيل محلياً

يمكنك فتح `public/index.html` في المتصفح لرؤية الصفحة.

## النشر على Cloudflare Workers

يوفر الملف `wrangler.toml` إعداداً بسيطاً لنشر الموقع كعامل (Worker) يستضيف الملفات الموجودة داخل مجلد `public/`.
بعد تثبيت أداة `wrangler` وتسجيل الدخول يمكنك النشر بالأمر:

```bash
wrangler publish
```

## النشر على Cloudflare Pages

يمكنك ربط هذا المستودع بخدمة **Pages** مباشرة. سيُستخدم مجلد `public/` كمجلد الإخراج، ويمكن تشغيل الوظائف من مجلد `functions/`.
