import * as React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bell, Bookmark, CalendarDays, Check, ChevronRight, Heart, MessageCircle, MoreHorizontal, Search, ShieldCheck, SlidersHorizontal, Sparkles, X } from "lucide-react-native";

const profiles = [
  { name: "Aisha", age: 27, place: "Bengaluru, Karnataka", score: 94, image: require("../../assets/images/profile-aisha.png"), reason: "You both value family involvement and a calm home." },
  { name: "Sara", age: 25, place: "Hyderabad, Telangana", score: 89, image: require("../../assets/images/profile-aisha.png"), reason: "Shared hopes around faith, work, and where to settle." },
];

function AppHeader() {
  return (
    <View className="flex-row items-center justify-between px-5 pb-5 pt-3">
      <View className="flex-row items-center gap-3">
        <View className="size-11 overflow-hidden rounded-full border-2 border-primary bg-secondary">
          <Image source={profiles[0].image} accessibilityLabel="Aisha profile" className="h-full w-full" resizeMode="cover" />
        </View>
        <View>
          <Text className="text-xs text-muted-foreground">Good morning</Text>
          <Text className="text-lg font-bold text-foreground">Assalamu alaikum</Text>
        </View>
      </View>
      <Pressable accessibilityRole="button" accessibilityLabel="Notifications" className="relative size-11 items-center justify-center rounded-full bg-card">
        <Icon as={Bell} size={19} className="text-foreground" />
        <View className="absolute right-2 top-2 size-2 rounded-full bg-accent" />
      </Pressable>
    </View>
  );
}

function ProfileCard({ profile }: { profile: typeof profiles[number] }) {
  return (
    <View className="overflow-hidden rounded-[30px] bg-card shadow-lg">
      <View className="relative h-[340px]">
        <Image source={profile.image} accessibilityLabel={`${profile.name}'s profile photo`} className="h-full w-full" resizeMode="cover" />
        <View className="absolute inset-x-0 bottom-0 h-36 bg-black/45" />
        <View className="absolute left-4 top-4 flex-row items-center gap-2 rounded-full bg-background/90 px-3 py-2">
          <Icon as={ShieldCheck} size={14} className="text-primary" />
          <Text className="text-xs font-semibold text-foreground">Verified profile</Text>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Save profile" className="absolute right-4 top-4 size-10 items-center justify-center rounded-full bg-background/90">
          <Icon as={Bookmark} size={18} className="text-foreground" />
        </Pressable>
        <View className="absolute bottom-5 left-5">
          <Text className="text-[28px] font-bold text-white">{profile.name}, {profile.age}</Text>
          <Text className="mt-1 text-sm text-white/85">{profile.place}</Text>
        </View>
        <View className="absolute bottom-5 right-5 items-center rounded-2xl bg-accent px-3 py-2">
          <Text className="text-xl font-bold text-accent-foreground">{profile.score}%</Text>
          <Text className="text-[10px] font-semibold uppercase text-accent-foreground/70">match</Text>
        </View>
      </View>
      <View className="gap-4 p-4">
        <View className="flex-row items-start gap-3">
          <View className="size-8 items-center justify-center rounded-full bg-accent"><Icon as={Sparkles} size={15} className="text-accent-foreground" /></View>
          <Text className="flex-1 text-sm leading-5 text-muted-foreground">{profile.reason}</Text>
        </View>
        <View className="flex-row gap-2">
          <Button variant="outline" size="icon" accessibilityLabel="Pass"><Icon as={X} size={18} /></Button>
          <Button className="flex-1 bg-primary"><Icon as={Heart} size={17} /><Text className="font-semibold text-primary-foreground">Express interest</Text></Button>
          <Button variant="outline" size="icon" accessibilityLabel="View profile"><Icon as={ArrowUpRight} size={18} /></Button>
        </View>
      </View>
    </View>
  );
}

function BottomNav() {
  const items = [{ icon: Heart, label: "Discover", active: true }, { icon: Check, label: "Interests" }, { icon: MessageCircle, label: "Chats" }, { icon: MoreHorizontal, label: "Profile" }];
  return <View className="flex-row border-t border-border bg-background px-5 pb-3 pt-3">{items.map(({ icon, label, active }) => <Pressable key={label} accessibilityRole="button" accessibilityLabel={label} className="flex-1 items-center gap-1"><Icon as={icon} size={20} className={active ? "text-primary" : "text-muted-foreground"} /><Text className={`text-[11px] font-semibold ${active ? "text-primary" : "text-muted-foreground"}`}>{label}</Text></Pressable>)}</View>;
}

export default function Index() {
  return <SafeAreaView className="flex-1 bg-background" edges={["top", "bottom"]}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-5">
      <AppHeader />
      <View className="px-5">
        <View className="flex-row items-end justify-between">
          <View><Text className="text-[40px] font-bold leading-[44px] text-foreground">Find your</Text><Text className="text-[40px] font-bold leading-[44px] text-primary">person.</Text></View>
          <Pressable accessibilityRole="button" accessibilityLabel="Search and filter" className="size-12 items-center justify-center rounded-full bg-card"><Icon as={Search} size={20} className="text-foreground" /></Pressable>
        </View>
        <Text className="mt-3 text-sm leading-5 text-muted-foreground">Meaningful introductions, guided by what matters to you.</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2 py-5">
          {["All matches", "Family values", "Faith", "Lifestyle"].map((item, index) => <Pressable key={item} className={`rounded-full px-5 py-3 ${index === 0 ? "bg-foreground" : "bg-card"}`}><Text className={`text-sm font-semibold ${index === 0 ? "text-background" : "text-foreground"}`}>{item}</Text></Pressable>)}
        </ScrollView>
        <View className="mb-4 flex-row items-center justify-between"><View><Text className="text-xl font-bold text-foreground">Curated for you</Text><Text className="mt-1 text-sm text-muted-foreground">Thoughtful over endless.</Text></View><Pressable accessibilityRole="button" accessibilityLabel="Open filters" className="flex-row items-center gap-2"><Icon as={SlidersHorizontal} size={16} className="text-foreground" /><Text className="text-xs font-semibold text-foreground">Filters</Text></Pressable></View>
        <ProfileCard profile={profiles[0]} />
        <View className="mt-6 flex-row items-center justify-between"><Text className="text-lg font-bold text-foreground">More possibilities</Text><Text className="text-xs text-muted-foreground">2 of 3</Text></View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-4 px-5 py-4"><View className="w-[280px]"><ProfileCard profile={profiles[1]} /></View><View className="w-[280px] items-center justify-center rounded-[30px] bg-accent px-7"><View className="mb-4 size-12 items-center justify-center rounded-full bg-background"><Icon as={CalendarDays} size={20} className="text-foreground" /></View><Text className="text-center text-xl font-bold text-accent-foreground">Take it at your pace.</Text><Text className="mt-2 text-center text-sm leading-5 text-accent-foreground/75">There is no rush. Your next introduction will be ready when you are.</Text><Button variant="outline" className="mt-5 border-accent-foreground/20 bg-background"><Text className="font-semibold text-foreground">Adjust preferences</Text><Icon as={ChevronRight} size={15} className="text-foreground" /></Button></View></ScrollView>
      <View className="mx-5 mt-2 flex-row items-center gap-3 rounded-2xl bg-primary px-4 py-3"><Icon as={ShieldCheck} size={20} className="text-primary-foreground" /><Text className="flex-1 text-xs leading-4 text-primary-foreground/85">Your privacy comes first. Exact locations and contact details stay hidden.</Text></View>
    </ScrollView>
    <BottomNav />
  </SafeAreaView>;
}
