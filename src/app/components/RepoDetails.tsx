"use client"
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {FiGithub } from "react-icons/fi";

const RepoDetails = ({ repo }) => {
  const [readmeContent, setReadmeContent] = useState("");

  // Function to fetch README content from the GitHub API
  useEffect(() => {
    async function fetchReadme() {
      try {
        // Fetch README content
        const response = await fetch(`${repo.url}/readme`);
        const data = await response.json();
        // Decode base64 encoded README content
        const decodedContent = atob(data.content);
        setReadmeContent(decodedContent);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    }

    fetchReadme();
  }, [repo.url]);

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      maxW="xl"
      mx="auto"
      overflowWrap="break-word"
    >
      {/* Repository name and link to GitHub */}
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <Heading as="h2" size="lg" fontWeight="bold" overflowWrap="break-word">
          {repo.name}
        </Heading>
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          fontSize="lg"
          color="gray.500"
          title="View on GitHub"
        >
          <IconButton
            aria-label="View on GitHub"
            icon={<FiGithub />}
            variant="ghost"
            size="md"
          />
        </Link>
      </Flex>
      
      {/* Repository description */}
      <Text color="gray.600" mb={4} overflowWrap="break-word">
        {repo.description || "No description available."}
      </Text>
      
      {/* Divider */}
      <Divider />
      
      {/* Repository details */}
      <Flex alignItems="center" mt={4}>
        <Text mr={4} fontWeight="bold">
          Stars:
        </Text>
        <Text>{repo.stargazers_count}</Text>
        <Text mx={4} fontWeight="bold">
          Forks:
        </Text>
        <Text>{repo.forks_count}</Text>
        <Text mx={4} fontWeight="bold">
          License:
        </Text>
        <Text>{repo.license ? repo.license.name : "Unknown"}</Text>
      </Flex>
      <Flex alignItems="center" mt={4}>
        <Text mr={4} fontWeight="bold">
          Language:
        </Text>
        <Text>{repo.language || "Unknown"}</Text>
        <Text mx={4} fontWeight="bold">
          Created:
        </Text>
        <Text>{new Date(repo.created_at).toLocaleDateString()}</Text>
        <Text mx={4} fontWeight="bold">
          Last Updated:
        </Text>
        <Text>{new Date(repo.updated_at).toLocaleDateString()}</Text>
      </Flex>
      <Flex alignItems="center" mt={4} overflowX="auto">
        <Text mr={4} fontWeight="bold">
          Primary Branch:
        </Text>
        <Text whiteSpace="nowrap">{repo.default_branch}</Text>
      </Flex>
      
      {/* Display README content if available */}
      {readmeContent && (
        <>
          <Divider mt={6} mb={4} />
          <Heading as="h3" size="md" mb={2}>
            README
          </Heading>
          <Text color="gray.700" whiteSpace="pre-line">
            {readmeContent}
          </Text>
        </>
      )}
    </Box>
  );
};

export default RepoDetails;
