class Partition < ActiveRecord::Migration[6.1]
  def change
    create_sql = <<~SQL
      CREATE TABLE if not exists `github_events` (
        `id` bigint(20) DEFAULT NULL,
        `type` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `repo_id` bigint(20) DEFAULT NULL,
        `repo_name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `actor_id` bigint(20) DEFAULT NULL,
        `actor_login` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `actor_location` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `language` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `additions` bigint(20) DEFAULT NULL,
        `deletions` bigint(20) DEFAULT NULL,
        `action` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `number` int(11) DEFAULT NULL,
        `commit_id` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `comment_id` bigint(20) DEFAULT NULL,
        `org_login` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `org_id` bigint(20) DEFAULT NULL,
        `state` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `closed_at` datetime DEFAULT NULL,
        `comments` int(11) DEFAULT NULL,
        `pr_merged_at` datetime DEFAULT NULL,
        `pr_merged` tinyint(1) DEFAULT NULL,
        `pr_changed_files` int(11) DEFAULT NULL,
        `pr_review_comments` int(11) DEFAULT NULL,
        `pr_or_issue_id` bigint(20) DEFAULT NULL,
        `event_day` date DEFAULT NULL,
        `event_month` date DEFAULT NULL,
        `author_association` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
        `event_year` int(11) DEFAULT NULL,
        `push_size` int(11) DEFAULT NULL,
        `push_distinct_size` int(11) DEFAULT NULL,
        KEY `index_github_events_on_id` (`id`),
        KEY `index_github_events_on_action` (`action`),
        KEY `index_github_events_on_actor_id` (`actor_id`),
        KEY `index_github_events_on_actor_login` (`actor_login`),
        KEY `index_github_events_on_additions` (`additions`),
        KEY `index_github_events_on_closed_at` (`closed_at`),
        KEY `index_github_events_on_comment_id` (`comment_id`),
        KEY `index_github_events_on_comments` (`comments`),
        KEY `index_github_events_on_commit_id` (`commit_id`),
        KEY `index_github_events_on_created_at` (`created_at`),
        KEY `index_github_events_on_deletions` (`deletions`),
        KEY `index_github_events_on_event_day` (`event_day`),
        KEY `index_github_events_on_event_month` (`event_month`),
        KEY `index_github_events_on_event_year` (`event_year`),
        KEY `index_github_events_on_language` (`language`),
        KEY `index_github_events_on_org_id` (`org_id`),
        KEY `index_github_events_on_org_login` (`org_login`),
        KEY `index_github_events_on_pr_changed_files` (`pr_changed_files`),
        KEY `index_github_events_on_pr_merged_at` (`pr_merged_at`),
        KEY `index_github_events_on_pr_or_issue_id` (`pr_or_issue_id`),
        KEY `index_github_events_on_pr_review_comments` (`pr_review_comments`),
        KEY `index_github_events_on_repo_id` (`repo_id`),
        KEY `index_github_events_on_repo_name` (`repo_name`),
        KEY `index_github_events_on_type` (`type`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin
      PARTITION BY LIST COLUMNS(type) (
        PARTITION push_event VALUES IN ('PushEvent'),
        PARTITION create_event VALUES IN ('CreateEvent'),
        PARTITION pull_request_event VALUES IN ('PullRequestEvent'),
        PARTITION watch_event VALUES IN ('WatchEvent'),
        PARTITION issue_comment_event VALUES IN ('IssueCommentEvent'),
        PARTITION issues_event VALUES IN ('IssuesEvent'),
        PARTITION delete_event VALUES IN ('DeleteEvent'),
        PARTITION fork_event VALUES IN ('ForkEvent'),
        PARTITION pull_request_review_comment_event VALUES IN ('PullRequestReviewCommentEvent'),
        PARTITION pull_request_review_event VALUES IN ('PullRequestReviewEvent'),
        PARTITION gollum_event VALUES IN ('GollumEvent'),
        PARTITION release_event VALUES IN ('ReleaseEvent'),
        PARTITION member_event VALUES IN ('MemberEvent'),
        PARTITION commit_comment_event VALUES IN ('CommitCommentEvent'),
        PARTITION public_event VALUES IN ('PublicEvent'),
        PARTITION gist_event VALUES IN ('GistEvent'),
        PARTITION follow_event VALUES IN ('FollowEvent'),
        PARTITION event VALUES IN ('Event'),
        PARTITION download_event VALUES IN ('DownloadEvent'),
        PARTITION team_add_event VALUES IN ('TeamAddEvent'),
        PARTITION fork_apply_event VALUES IN ('ForkApplyEvent')
      );
    SQL
    execute(create_sql)
  end
end
