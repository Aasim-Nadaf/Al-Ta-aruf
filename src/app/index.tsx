import * as React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bell, Bookmark, Check, ChevronRight, Filter, Heart, MessageCircle, MoreHorizontal, ShieldCheck, SlidersHorizontal, Sparkles, X } from "lucide-react-native";

const matches = [
  { name: "Aisha", age: 27, place: "Bengaluru, Karnataka", score: 94, reason: "You both value family involvement and a calm home.", image: require("../../assets/images/profile-aisha.png") },
  { name: "Sara", age: 25, place: "Hyderabad, Telangana", score: 89, reason: "Shared hopes around faith, work, and where to settle.", image: require("../../assets/images/profile-aisha.png") },
];

function Header() {
  return (
    <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
      <View>
        <Text className="text-xs font-semibold uppercase tracking-[2px] text-primary">Al-Ta&apos;aruf</Text>
        <Text className="mt-1 text-2xl font-bold text-foreground">Begin with intention.</Text>
      </View>
      <Pressable accessibilityRole="button" accessibilityLabel="Notifications" className="size-11 items-center justify-center rounded-full border border-border bg-card">
        <Icon as={Bell} size={20} className="text-foreground" />
        <View className="absolute right-2 top-2 size-2 rounded-full bg-accent" />
      </Pressable>
    </View>
  );
}

function MatchCard({ match, featured = false }: { match: typeof matches[number]; featured?: boolean }) {
  return (
    <View className={`overflow-hidden rounded-[28px] border border-border bg-card ${featured ? "" : "w-[268px]"}`}>
      <View className="relative h-[300px] bg-secondary">
        <Image source={match.image} accessibilityLabel={`${match.name}'s profile photo`} className="h-full w-full" resizeMode="cover" />
        <View className="absolute inset-x-0 bottom-0 h-28 bg-black/35" />
        <View className="absolute left-4 top-4 flex-row items-center gap-2 rounded-full bg-background/90 px-3 py-2">
          <Icon as={ShieldCheck} size={15} className="text-primary" />
          <Text className="text-xs font-semibold text-foreground">Photo verified</Text>
        </View>
        <View className="absolute bottom-4 left-4">
          <Text className="text-2xl font-bold text-white">{match.name}, {match.age}</Text>
          <Text className="mt-1 text-sm text-white/85">{match.place}</Text>
        </View>
        <View className="absolute bottom-4 right-4 items-center rounded-2xl bg-primary px-3 py-2">
          <Text className="text-xl font-bold text-primary-foreground">{match.score}%</Text>
          <Text className="text-[10px] font-semibold uppercase text-primary-foreground/75">fit</Text>
        </View>
      </View>
      <View className="gap-4 p-4">
        <View className="flex-row items-start gap-3">
          <View className="mt-0.5 size-7 items-center justify-center rounded-full bg-accent/20"><Icon as={Sparkles} size={14} className="text-accent" /></View>
          <Text className="flex-1 text-sm leading-5 text-muted-foreground">{match.reason}</Text>
        </View>
        <View className="flex-row gap-2">
          <Button variant="outline" size="icon" accessibilityLabel="Pass"><Icon as={X} size={19} /></Button>
          <Button className="flex-1"><Icon as={Heart} size={17} /><Text>Express interest</Text></Button>
          <Button variant="outline" size="icon" accessibilityLabel="Save for later"><Icon as={Bookmark} size={18} /></Button>
        </View>
      </View>
    </View>
  );
}

function BottomNav() {
  return (
    <View className="flex-row border-t border-border bg-background px-5 pb-3 pt-3">
      {[{ icon: Heart, label: "Discover", active: true }, { icon: Check, label: "Interests" }, { icon: MessageCircle, label: "Chats" }, { icon: MoreHorizontal, label: "Profile" }].map(({ icon, label, active }) => (
        <Pressable key={label} accessibilityRole="button" accessibilityLabel={label} className="flex-1 items-center gap-1">
          <Icon as={icon} size={20} className={active ? "text-primary" : "text-muted-foreground"} />
          <Text className={`text-[11px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top", "bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-5">
        <Header />
        <View className="mx-5 mb-5 flex-row items-center justify-between rounded-2xl border border-border bg-muted px-4 py-3">
          <View className="flex-row items-center gap-3"><View className="size-8 items-center justify-center rounded-full bg-accent/20"><Icon as={Sparkles} size={16} className="text-accent" /></View><View><Text className="text-sm font-semibold text-foreground">Your daily introductions</Text><Text className="mt-0.5 text-xs text-muted-foreground">3 thoughtful matches ready</Text></View></View>
          <Icon as={ChevronRight} size={18} className="text-muted-foreground" />
        </View>
        <View className="mb-4 flex-row items-end justify-between px-5"><View><Text className="text-xl font-bold text-foreground">Curated for you</Text><Text className="mt-1 text-sm text-muted-foreground">Thoughtful over endless.</Text></View><Pressable accessibilityRole="button" accessibilityLabel="Open filters" className="flex-row items-center gap-2 rounded-full border border-border px-3 py-2"><Icon as={SlidersHorizontal} size={15} className="text-foreground" /><Text className="text-xs font-semibold text-foreground">Filters</Text></Pressable></View>
        <View className="px-5"><MatchCard match={matches[0]} featured /></View>
        <View className="mt-7 flex-row items-center justify-between px-5"><Text className="text-lg font-bold text-foreground">More possibilities</Text><Text className="text-xs font-medium text-muted-foreground">2 of 3 shown</Text></View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-4 px-5 py-4"><MatchCard match={matches[1]} /><View className="w-[268px] items-center justify-center rounded-[28px] border border-dashed border-border bg-muted px-6"><View className="mb-3 size-12 items-center justify-center rounded-full bg-background"><Icon as={Filter} size={20} className="text-primary" /></View><Text className="text-center text-base font-semibold text-foreground">Refine your preferences</Text><Text className="mt-2 text-center text-sm leading-5 text-muted-foreground">Small details help us make better introductions.</Text><Button variant="ghost" className="mt-3"><Text>Review filters</Text><Icon as={ArrowRight} size={15} /></Button></View></ScrollView>
        <View className="mx-5 mt-2 flex-row items-center gap-3 rounded-2xl bg-primary px-4 py-3"><Icon as={ShieldCheck} size={20} className="text-primary-foreground" /><Text className="flex-1 text-xs leading-4 text-primary-foreground/85">Your privacy comes first. Exact locations and contact details stay hidden.</Text></View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
