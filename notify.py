import json
import random
import requests
import os
from datetime import datetime

ONESIGNAL_APP_ID = '44fd0d98-cb4f-4293-8f83-b632b69a8953'
ONESIGNAL_API_KEY = 'd7e5bff8-3259-4ea7-9fe3-5e14c1d56547'
WEBSITE_URL = 'https://buddha-dhamma.vercel.app/'

def load_quotes():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    quotes_path = os.path.join(script_dir, 'quotes.json')
    with open(quotes_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def pick_quote(quotes):
    now = datetime.now()
    index = (now.hour // 6 + now.day) % len(quotes)
    return quotes[index]

def send_notification(quote_km, quote_en):
    url = 'https://onesignal.com/api/v1/notifications'
    headers = {
        'Authorization': f'Basic {ONESIGNAL_API_KEY}',
        'Content-Type': 'application/json'
    }
    payload = {
        'app_id': ONESIGNAL_APP_ID,
        'headings': {
            'km': '\u179f\u17b7\u179b\u17d2\u1794\u17c8 \u179a\u1794\u179f\u17cb\u1781\u17d2\u1798\u17c2\u179a',
            'en': 'Daily Dhamma'
        },
        'contents': {
            'km': quote_km,
            'en': quote_en
        },
        'url': WEBSITE_URL,
        'ttl': 21600
    }
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        print(f'Sent: {quote_km[:50]}...')
    else:
        print(f'Error: {response.status_code} - {response.text}')

def main():
    quotes = load_quotes()
    quote = pick_quote(quotes)
    send_notification(quote['km'], quote['en'])

if __name__ == '__main__':
    main()
