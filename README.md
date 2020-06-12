# confetti-birthday

## Development

```
bash -c "sleep 1 && open http://localhost:5000/public" & npx serve
```

## Production

This app is deployed on Netify on http://ynab-happy-birthday.netlify.app.

### QR Code Generation

Run `npx qrcode -o "~/Desktop/emily.png" http://ynab-happy-birthday.netlify.app/\?id\=5e2017b0`
