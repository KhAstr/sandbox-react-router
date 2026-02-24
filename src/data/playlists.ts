import { IPlaylist } from "./interfaces";

export const PLAYLISTS: IPlaylist[] = [
  {
    id: "pl_001",
    name: "Chill Vibes",
    genre: "Lo-Fi Hip Hop",
    img: "https://avatars.githubusercontent.com/u/14016129",
    desc: "Расслабляющие лоу-фай биты для работы, учебы и отдыха. Идеальный фон для продуктивного дня.",
    tracks: [
      {
        id: "t_001",
        title: "Midnight Coffee",
        artist: "LoFi Dreamer",
        duration: "3:45"
      },
      {
        id: "t_002",
        title: "Rainy Day Thoughts",
        artist: "Chillhop Collective",
        duration: "4:12"
      },
      {
        id: "t_003",
        title: "Urban Sunset",
        artist: "Mellow Beats",
        duration: "3:28"
      },
      {
        id: "t_004",
        title: "Quiet Moments",
        artist: "Ambient Waves",
        duration: "5:01"
      },
      {
        id: "t_005",
        title: "Lazy Sunday",
        artist: "Smooth Grooves",
        duration: "4:37"
      }
    ]
  },
  {
    id: "pl_002",
    name: "Workout Energy",
    genre: "Electronic Dance",
    img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg",
    desc: "Заряженная электронная музыка для интенсивных тренировок и кардио. Повысь свою мотивацию!",
    tracks: [
      {
        id: "t_006",
        title: "Power Up",
        artist: "EDM Masters",
        duration: "4:15"
      },
      {
        id: "t_007",
        title: "Adrenaline Rush",
        artist: "Bass Boosters",
        duration: "3:52"
      },
      {
        id: "t_008",
        title: "High Intensity",
        artist: "Fitness Beats",
        duration: "4:30"
      },
      {
        id: "t_009",
        title: "No Limits",
        artist: "Energy Wave",
        duration: "3:48"
      },
      {
        id: "t_010",
        title: "Victory Lap",
        artist: "Champion Sound",
        duration: "4:22"
      },
      {
        id: "t_011",
        title: "Push Through",
        artist: "Motivation Mix",
        duration: "5:05"
      }
    ]
  },
  {
    id: "pl_003",
    name: "Acoustic Mornings",
    genre: "Indie Folk",
    img: "https://avatars.githubusercontent.com/u/48007532",
    desc: "Нежные акустические мелодии для спокойного утра с чашкой кофе. Создайте атмосферу уюта.",
    tracks: [
      {
        id: "t_012",
        title: "Morning Light",
        artist: "Folk Harmony",
        duration: "3:35"
      },
      {
        id: "t_013",
        title: "Simple Things",
        artist: "Acoustic Dreams",
        duration: "4:08"
      },
      {
        id: "t_014",
        title: "Wooden Guitar",
        artist: "Nature Sounds",
        duration: "3:55"
      },
      {
        id: "t_015",
        title: "Peaceful Mind",
        artist: "Serenade Sessions",
        duration: "4:42"
      },
      {
        id: "t_016",
        title: "Coffee Shop Vibes",
        artist: "Indie Artists",
        duration: "3:29"
      }
    ]
  },
  {
    id: "pl_004",
    name: "Focus Flow",
    genre: "Ambient",
    img: "https://avatars.githubusercontent.com/u/30781235",
    desc: "Минималистичные амбиент-композиции для глубокой концентрации и продуктивной работы.",
    tracks: [
      {
        id: "t_017",
        title: "Deep Focus",
        artist: "Ambient Minds",
        duration: "6:12"
      },
      {
        id: "t_018",
        title: "Flow State",
        artist: "Productivity Sounds",
        duration: "5:45"
      },
      {
        id: "t_019",
        title: "Minimal Waves",
        artist: "Zen Audio",
        duration: "7:20"
      },
      {
        id: "t_020",
        title: "Concentration Zone",
        artist: "Focus Masters",
        duration: "6:33"
      },
      {
        id: "t_021",
        title: "Quiet Space",
        artist: "Meditation Mix",
        duration: "5:58"
      },
      {
        id: "t_022",
        title: "Deep Work",
        artist: "Ambient Flow",
        duration: "6:47"
      }
    ]
  }
]