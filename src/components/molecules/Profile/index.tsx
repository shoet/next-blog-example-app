import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'

const Profile = () => {
  return (
    <>
      <Box marginBottom={3}>
        <Box marginBottom={1}>
          <Text variant="medium" fontWeight="bold">
            プロフィール・経歴
          </Text>
        </Box>
        <Text as="p" variant="small">
          東京都生まれのWebデベロッパー、佐藤太郎と申します。大学では情報工学を専攻し、特にフロントエンドの技術に興味を持ちました。大学卒業後、数々のスタートアップ企業での経験を経て、現在はフリーランスとして活動しています。ReactやVueを中心としたモダンな技術スタックでの開発経験が豊富で、特にユーザーエクスペリエンスを重視したウェブアプリケーションの構築が得意です。
        </Text>
      </Box>
      <Box marginBottom={3}>
        <Box marginBottom={1}>
          <Text variant="medium" fontWeight="bold">
            信念
          </Text>
        </Box>
        <Text as="p" variant="small">
          「コードは芸術である」。これからも技術の習得を続け、世界に影響を与えるようなプロダクトの開発を目指しています。
        </Text>
      </Box>
    </>
  )
}

export default Profile
