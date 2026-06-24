export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Mobile',
    items: [
      'Flutter',
      'Dart',
      'App Store & Play Store publishing',
      'CI/CD (Fastlane, Codemagic, GitHub Actions)',
    ],
  },
  {
    category: 'Architecture & State',
    items: ['Clean Architecture', 'MVVM', 'MVC', 'Bloc', 'Cubit', 'Riverpod', 'GetX'],
  },
  {
    category: 'Testing',
    items: ['flutter_test', 'bloc_test', 'Mockito', 'TDD'],
  },
  {
    category: 'APIs & Real-Time',
    items: ['REST', 'Dio', 'Retrofit', 'WebSocket', 'Socket.IO', 'OCPP'],
  },
  {
    category: 'Storage',
    items: ['Hive', 'SQLite', 'GetStorage', 'Shared Preferences', 'Firebase'],
  },
  {
    category: 'Web & Backend',
    items: ['Next.js 15', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'Android Studio', 'Xcode'],
  },
]
