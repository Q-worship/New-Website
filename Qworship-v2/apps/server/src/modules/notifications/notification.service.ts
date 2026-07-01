import type { Types } from 'mongoose'
import { Notification } from './notification.model.js'

type UserId = Types.ObjectId | string

export async function notifyWelcome(_userId: UserId, _firstName?: string): Promise<void> {
  // Welcome notification can be wired when email/in-app delivery is configured.
}

export async function notifyPasswordChange(_userId: UserId): Promise<void> {
  // Password-change notification can be wired when delivery is configured.
}

export async function notifyRecordingSaved(
  userId: UserId,
  recordingName?: string,
): Promise<void> {
  await Notification.create({
    userId,
    type: 'recording_saved',
    category: 'user',
    title: 'Recording saved',
    message: recordingName
      ? `Your recording "${recordingName}" was saved.`
      : 'Your recording was saved.',
    icon: 'Mic',
    isRead: false,
  })
}

interface BroadcastOptions {
  type: string
  category: string
  title: string
  message: string
  icon?: string
}

export async function broadcastNotification(options: BroadcastOptions): Promise<number> {
  // Without a user registry query here, admin broadcasts are no-ops until expanded.
  void options
  return 0
}

export async function broadcastNewFeature(title: string, message: string): Promise<number> {
  return broadcastNotification({
    type: 'admin_feature',
    category: 'admin',
    title,
    message,
    icon: 'Sparkles',
  })
}

export async function broadcastNewBible(title: string): Promise<number> {
  return broadcastNotification({
    type: 'admin_bible',
    category: 'admin',
    title,
    message: 'A new Bible translation is available.',
    icon: 'BookOpen',
  })
}

export async function broadcastPromotion(title: string, message: string): Promise<number> {
  return broadcastNotification({
    type: 'admin_promotion',
    category: 'admin',
    title,
    message,
    icon: 'Megaphone',
  })
}
