# confetti-birthday

## Development

```
bash -c "sleep 1 && open http://localhost:5000/public" & npx serve
```

## Production

This app is deployed on Netify on http://ynab-happy-birthday.netlify.app.

To generate a link for a birthday, grab an id from `functions/heading.js` and add it as a `id` query like this: http://ynab-happy-birthday.netlify.app/?id=030a66ac

### QR Generator

https://www.the-qrcode-generator.com/
