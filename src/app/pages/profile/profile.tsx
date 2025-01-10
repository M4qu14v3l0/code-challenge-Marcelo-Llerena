import { useGetProfile } from "@/hooks/use-get-profile";
import styles from "./profile.module.css";
import Avatar from "@/components/ui/avatar/avatar";

export default function ProfilePage() {
  const { profileData } = useGetProfile();
  const name = profileData?.fullName.split(" ")[0];
  return (
    <div className={styles.profileContainer}>
      <div className={styles.pictureSection}>
        <div className={styles.avatarContainer}>
          <Avatar
            profile="marcelo"
            radius="20px"
            height="150px"
            width="150px"
          />
          <p className={styles.avatarText}>
            {name === "Marcelo" ? "m4qu14v3l0" : name}
          </p>
          <p className={styles.avatarSubText}> {profileData?.type}</p>
        </div>
      </div>

      <div className={styles.divisor} />

      <div className={styles.firstRow}>
        <label className={styles.label}>
          Full Name
          <input
            value={profileData?.fullName}
            readOnly
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Contact Email
          <input value={profileData?.email} readOnly className={styles.input} />
        </label>
        <label className={styles.label}>
          Created At
          <input
            value={profileData?.createdAt}
            readOnly
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Updated At
          <input
            value={profileData?.updatedAt}
            readOnly
            className={styles.input}
          />
        </label>
      </div>
    </div>
  );
}
