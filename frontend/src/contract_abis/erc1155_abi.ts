export const ABI = [
  {
    type: "impl",
    name: "ERC1155Impl",
    interface_name: "openzeppelin::token::erc1155::interface::IERC1155",
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<core::starknet::contract_address::ContractAddress>",
      },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<core::integer::u256>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<core::integer::u256>",
      },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<core::felt252>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<core::felt252>",
      },
    ],
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc1155::interface::IERC1155",
    items: [
      {
        type: "function",
        name: "balance_of",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "balance_of_batch",
        inputs: [
          {
            name: "accounts",
            type: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
          },
          {
            name: "token_ids",
            type: "core::array::Span::<core::integer::u256>",
          },
        ],
        outputs: [
          {
            type: "core::array::Span::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "safe_transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_id",
            type: "core::integer::u256",
          },
          {
            name: "value",
            type: "core::integer::u256",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "safe_batch_transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_ids",
            type: "core::array::Span::<core::integer::u256>",
          },
          {
            name: "values",
            type: "core::array::Span::<core::integer::u256>",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "is_approved_for_all",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "set_approval_for_all",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "approved",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC1155MetadataURIImpl",
    interface_name:
      "openzeppelin::token::erc1155::interface::IERC1155MetadataURI",
  },
  {
    type: "struct",
    name: "core::byte_array::ByteArray",
    members: [
      {
        name: "data",
        type: "core::array::Array::<core::bytes_31::bytes31>",
      },
      {
        name: "pending_word",
        type: "core::felt252",
      },
      {
        name: "pending_word_len",
        type: "core::integer::u32",
      },
    ],
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc1155::interface::IERC1155MetadataURI",
    items: [
      {
        type: "function",
        name: "uri",
        inputs: [
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::byte_array::ByteArray",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC1155Camel",
    interface_name: "openzeppelin::token::erc1155::interface::IERC1155Camel",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc1155::interface::IERC1155Camel",
    items: [
      {
        type: "function",
        name: "balanceOf",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "balanceOfBatch",
        inputs: [
          {
            name: "accounts",
            type: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
          },
          {
            name: "tokenIds",
            type: "core::array::Span::<core::integer::u256>",
          },
        ],
        outputs: [
          {
            type: "core::array::Span::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
          {
            name: "value",
            type: "core::integer::u256",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "safeBatchTransferFrom",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "tokenIds",
            type: "core::array::Span::<core::integer::u256>",
          },
          {
            name: "values",
            type: "core::array::Span::<core::integer::u256>",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "approved",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "SRC5Impl",
    interface_name: "openzeppelin::introspection::interface::ISRC5",
  },
  {
    type: "interface",
    name: "openzeppelin::introspection::interface::ISRC5",
    items: [
      {
        type: "function",
        name: "supports_interface",
        inputs: [
          {
            name: "interface_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "token_uri",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "token_ids",
        type: "core::array::Span::<core::integer::u256>",
      },
      {
        name: "values",
        type: "core::array::Span::<core::integer::u256>",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc1155::erc1155::ERC1155Component::TransferSingle",
    kind: "struct",
    members: [
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "value",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc1155::erc1155::ERC1155Component::TransferBatch",
    kind: "struct",
    members: [
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "ids",
        type: "core::array::Span::<core::integer::u256>",
        kind: "data",
      },
      {
        name: "values",
        type: "core::array::Span::<core::integer::u256>",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc1155::erc1155::ERC1155Component::ApprovalForAll",
    kind: "struct",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "approved",
        type: "core::bool",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc1155::erc1155::ERC1155Component::URI",
    kind: "struct",
    members: [
      {
        name: "value",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "id",
        type: "core::integer::u256",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc1155::erc1155::ERC1155Component::Event",
    kind: "enum",
    variants: [
      {
        name: "TransferSingle",
        type: "openzeppelin::token::erc1155::erc1155::ERC1155Component::TransferSingle",
        kind: "nested",
      },
      {
        name: "TransferBatch",
        type: "openzeppelin::token::erc1155::erc1155::ERC1155Component::TransferBatch",
        kind: "nested",
      },
      {
        name: "ApprovalForAll",
        type: "openzeppelin::token::erc1155::erc1155::ERC1155Component::ApprovalForAll",
        kind: "nested",
      },
      {
        name: "URI",
        type: "openzeppelin::token::erc1155::erc1155::ERC1155Component::URI",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::introspection::src5::SRC5Component::Event",
    kind: "enum",
    variants: [],
  },
  {
    type: "event",
    name: "token_bundler::mocks::erc1155::MockERC1155::Event",
    kind: "enum",
    variants: [
      {
        name: "ERC1155Event",
        type: "openzeppelin::token::erc1155::erc1155::ERC1155Component::Event",
        kind: "flat",
      },
      {
        name: "SRC5Event",
        type: "openzeppelin::introspection::src5::SRC5Component::Event",
        kind: "flat",
      },
    ],
  },
] as const;
