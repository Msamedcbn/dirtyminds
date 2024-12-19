import { CategoryData } from '../types/game';

export const questions: Record<string, CategoryData> = {
  normal: {
    truths: [
      "What's the most embarrassing song on your playlist?",
      "What's the silliest thing you've done in public?",
      "What's your biggest pet peeve?",
      "What's the worst gift you've ever received?",
      "What's your most unusual talent?"
    ],
    dares: [
      "Do your best dance move right now",
      "Sing the chorus of your favorite song",
      "Do 10 jumping jacks",
      "Make a funny face and hold it for 30 seconds",
      "Tell a joke to make someone laugh"
    ]
  },
  adult: {
    truths: [
      "What's your biggest romantic regret?",
      "What's the most adventurous thing you've done?",
      "What's your ideal romantic evening?",
      "What's your definition of a perfect date?",
      "What's your most memorable romantic moment?"
    ],
    dares: [
      "Share your best pickup line",
      "Show your best flirting technique",
      "Tell a romantic story",
      "Give your best compliment",
      "Share a romantic secret"
    ]
  },
  extreme: {
    truths: [
      "What's your wildest party story?",
      "What's the craziest thing you've done for love?",
      "What's your most daring experience?",
      "What's your biggest secret fantasy?",
      "What's the most spontaneous thing you've done?"
    ],
    dares: [
      "Share your most intense story",
      "Demonstrate your wild side",
      "Show your most daring move",
      "Tell your most exciting adventure",
      "Share your boldest moment"
    ],
    punishments: [
      "Diğer oyuncular sana 1 dakika boyunca soru sorabilir",
      "Telefonundan rastgele birine mesaj at",
      "Instagram hikayene komik bir video koy",
      "Gruba en son attığın mesajı sil",
      "10 şınav çek",
      "1 dakika boyunca plank yap",
      "Karşındakinin telefonundan story at",
      "Gruba voice message at"
    ]
  }
};