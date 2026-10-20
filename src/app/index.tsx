import * as React from "react";
import { View } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { useColorScheme } from "@/lib/useColorScheme";
import { Moon, Sun, Monitor } from "lucide-react-native";

export default function Index() {
  const { colorScheme, isDarkColorScheme, setColorScheme, toggleColorScheme } =
    useColorScheme();

  return (
    <View className="flex-1 bg-background justify-center items-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center">
          <View className="h-16 w-16 rounded-full bg-secondary items-center justify-center mb-2">
            <Icon
              as={isDarkColorScheme ? Moon : Sun}
              className="text-foreground"
              size={32}
            />
          </View>
          <CardTitle className="text-2xl text-center">Al-Ta-aruf</CardTitle>
          <CardDescription className="text-center">
            Theme support is now active!
          </CardDescription>
        </CardHeader>

        <CardContent className="gap-4">
          <View className="flex-row items-center justify-between p-3 rounded-lg bg-muted">
            <Text className="text-sm font-medium">Active Appearance</Text>
            <Badge variant="outline">
              <Text className="text-xs uppercase">{colorScheme} Mode</Text>
            </Badge>
          </View>

          <View className="flex-row gap-2 justify-center">
            <Button
              variant={colorScheme === "light" ? "default" : "outline"}
              size="sm"
              onPress={() => setColorScheme("light")}
              className="flex-1"
            >
              <Icon as={Sun} size={16} />
              <Text>Light</Text>
            </Button>

            <Button
              variant={colorScheme === "dark" ? "default" : "outline"}
              size="sm"
              onPress={() => setColorScheme("dark")}
              className="flex-1"
            >
              <Icon as={Moon} size={16} />
              <Text>Dark</Text>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onPress={() => setColorScheme("system")}
              className="flex-1"
            >
              <Icon as={Monitor} size={16} />
              <Text>System</Text>
            </Button>
          </View>
        </CardContent>

        <CardFooter>
          <Button
            variant="default"
            className="w-full"
            onPress={toggleColorScheme}
          >
            <Icon as={isDarkColorScheme ? Sun : Moon} size={18} />
            <Text>
              Switch to {isDarkColorScheme ? "Light Mode" : "Dark Mode"}
            </Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
}
