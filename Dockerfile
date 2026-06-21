{
  "currency": {
    "name": "BDT",
    "symbol": "৳"
  },
  "movies": [
    {
      "id": 1,
      "name": "Inception",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw&s=10",
      "genre": "Sci-Fi",
      "duration": "148 min",
      "rating": "8.8",
      "year": "2010",
      "baseTicketPrice": 300
    },
    {
      "id": 2,
      "name": "The Dark Knight",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA&s=10",
      "genre": "Action",
      "duration": "152 min",
      "rating": "9.0",
      "year": "2008",
      "baseTicketPrice": 350
    },
    {
      "id": 3,
      "name": "Interstellar",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX&s=10",
      "genre": "Sci-Fi",
      "duration": "169 min",
      "rating": "8.6",
      "year": "2014",
      "baseTicketPrice": 320
    },
    {
      "id": 4,
      "name": "Pulp Fiction",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqzGSUVlP74iyuFujryxWBYV6yqGirkn7BFHIJXEMzS4gNI-Z2wEKZsW6dLYA9B77BgyPdg&s=10",
      "genre": "Crime",
      "duration": "154 min",
      "rating": "8.9",
      "year": "1994",
      "baseTicketPrice": 280
    }
  ],
  "schedule": {
    "availableDatesCount": 5,
    "availableTimes": [
      "10:00 AM",
      "1:30 PM",
      "4:00 PM",
      "7:00 PM",
      "10:00 PM"
    ]
  },
  "seatConfiguration": {
    "rows": ["A", "B", "C", "D", "E"],
    "seatsPerRow": 10,
    "seatTypes": {
      "regular": {
        "rows": ["C", "D", "E"],
        "priceMultiplier": 1.0
      },
      "premium": {
        "rows": ["A", "B"],
        "priceMultiplier": 1.5
      }
    },
    "prebooked": {
      "default": ["B5", "B6", "C7", "D8"]
    }
  },
  "payment": {
    "methodName": "bKash",
    "bkashNumber": "01400353486",
    "paymentInstructions": [
      "Open your bKash app",
      "Send money to: 01400353486",
      "Amount will be shown below",
      "Enter the Transaction ID after payment"
    ],
    "transactionIdMinLength": 8
  },
  "ui": {
    "websiteName": "CINEMAGIC",
    "seatColors": {
      "available": "#ff3838",
      "selected": "#4a90e2",
      "booked": "#666666"
    }
  }
}
