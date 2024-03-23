export const ABI = [
  {
    type: "impl",
    name: "TokenBundlerImpl",
    interface_name: "token_bundler::tokenbundler::ITokenBundler",
  },
  {
    type: "enum",
    name: "token_bundler::multitoken::MultiToken::Category",
    variants: [
      {
        name: "ERC20",
        type: "()",
      },
      {
        name: "ERC721",
        type: "()",
      },
      {
        name: "ERC1155",
        type: "()",
      },
    ],
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
    name: "token_bundler::multitoken::MultiToken::Asset",
    members: [
      {
        name: "category",
        type: "token_bundler::multitoken::MultiToken::Category",
      },
      {
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "id",
        type: "core::integer::u256",
      },
      {
        name: "amount",
        type: "core::integer::u256",
      },
    ],
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
    name: "token_bundler::tokenbundler::TokenBundler::Bundle",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "tokens",
        type: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
      },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<token_bundler::multitoken::MultiToken::Asset>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<token_bundler::multitoken::MultiToken::Asset>",
      },
    ],
  },
  {
    type: "interface",
    name: "token_bundler::tokenbundler::ITokenBundler",
    items: [
      {
        type: "function",
        name: "create",
        inputs: [
          {
            name: "tokens",
            type: "core::array::Array::<token_bundler::multitoken::MultiToken::Asset>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "burn",
        inputs: [
          {
            name: "bundle_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "setUri",
        inputs: [
          {
            name: "token_uri",
            type: "core::byte_array::ByteArray",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "bundle",
        inputs: [
          {
            name: "bundle_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "token_bundler::tokenbundler::TokenBundler::Bundle",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "tokensInBundle",
        inputs: [
          {
            name: "bundle_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::array::Span::<token_bundler::multitoken::MultiToken::Asset>",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "SRC5Impl",
    interface_name: "openzeppelin::introspection::interface::ISRC5",
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
    type: "impl",
    name: "ERC721ReceiverImpl",
    interface_name: "openzeppelin::token::erc721::interface::IERC721Receiver",
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
    type: "interface",
    name: "openzeppelin::token::erc721::interface::IERC721Receiver",
    items: [
      {
        type: "function",
        name: "on_erc721_received",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_id",
            type: "core::integer::u256",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC721ReceiverCamelImpl",
    interface_name:
      "openzeppelin::token::erc721::interface::IERC721ReceiverCamel",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc721::interface::IERC721ReceiverCamel",
    items: [
      {
        type: "function",
        name: "onERC721Received",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "OwnableImpl",
    interface_name: "openzeppelin::access::ownable::interface::IOwnable",
  },
  {
    type: "interface",
    name: "openzeppelin::access::ownable::interface::IOwnable",
    items: [
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "transfer_ownership",
        inputs: [
          {
            name: "new_owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "renounce_ownership",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "OwnableCamelOnlyImpl",
    interface_name:
      "openzeppelin::access::ownable::interface::IOwnableCamelOnly",
  },
  {
    type: "interface",
    name: "openzeppelin::access::ownable::interface::IOwnableCamelOnly",
    items: [
      {
        type: "function",
        name: "transferOwnership",
        inputs: [
          {
            name: "newOwner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "MultiTokenImpl",
    interface_name: "token_bundler::multitoken::IMultiToken",
  },
  {
    type: "enum",
    name: "core::option::Option::<core::integer::u256>",
    variants: [
      {
        name: "Some",
        type: "core::integer::u256",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "enum",
    name: "core::option::Option::<core::bool>",
    variants: [
      {
        name: "Some",
        type: "core::bool",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "interface",
    name: "token_bundler::multitoken::IMultiToken",
    items: [
      {
        type: "function",
        name: "transferAssetFrom",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
          },
          {
            name: "source",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "dest",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "safeTransferAssetFrom",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
          },
          {
            name: "source",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "dest",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "approveAsset",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
          },
          {
            name: "target",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "getTransferAmount",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
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
        name: "balanceOfTarget",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
          },
          {
            name: "target",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::option::Option::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "isValid",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
          },
        ],
        outputs: [
          {
            type: "core::option::Option::<core::bool>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "isSameAs",
        inputs: [
          {
            name: "asset",
            type: "token_bundler::multitoken::MultiToken::Asset",
          },
          {
            name: "otherAsset",
            type: "token_bundler::multitoken::MultiToken::Asset",
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
    type: "impl",
    name: "ERC1155Impl",
    interface_name: "openzeppelin::token::erc1155::interface::IERC1155",
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
    name: "ERC1155ReceiverImpl",
    interface_name: "openzeppelin::token::erc1155::interface::IERC1155Receiver",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc1155::interface::IERC1155Receiver",
    items: [
      {
        type: "function",
        name: "on_erc1155_received",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "from",
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
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "on_erc1155_batch_received",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "from",
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
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC1155ReceiverCamelImpl",
    interface_name:
      "openzeppelin::token::erc1155::interface::IERC1155ReceiverCamel",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc1155::interface::IERC1155ReceiverCamel",
    items: [
      {
        type: "function",
        name: "onERC1155Received",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "from",
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
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "onERC1155BatchReceived",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "from",
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
        outputs: [
          {
            type: "core::felt252",
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
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "token_bundler::tokenbundler::TokenBundler::BundleCreated",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "creator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "token_bundler::tokenbundler::TokenBundler::BundleUnwrapped",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
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
    name: "openzeppelin::token::erc721::erc721_receiver::ERC721ReceiverComponent::Event",
    kind: "enum",
    variants: [],
  },
  {
    type: "event",
    name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnershipTransferred",
        type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        kind: "nested",
      },
      {
        name: "OwnershipTransferStarted",
        type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "token_bundler::multitoken::MultiToken::Event",
    kind: "enum",
    variants: [],
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
    name: "openzeppelin::token::erc1155::erc1155_receiver::ERC1155ReceiverComponent::Event",
    kind: "enum",
    variants: [],
  },
  {
    type: "event",
    name: "token_bundler::tokenbundler::TokenBundler::Event",
    kind: "enum",
    variants: [
      {
        name: "BundleCreated",
        type: "token_bundler::tokenbundler::TokenBundler::BundleCreated",
        kind: "nested",
      },
      {
        name: "BundleUnwrapped",
        type: "token_bundler::tokenbundler::TokenBundler::BundleUnwrapped",
        kind: "nested",
      },
      {
        name: "SRC5Event",
        type: "openzeppelin::introspection::src5::SRC5Component::Event",
        kind: "flat",
      },
      {
        name: "ERC721ReceiverEvent",
        type: "openzeppelin::token::erc721::erc721_receiver::ERC721ReceiverComponent::Event",
        kind: "flat",
      },
      {
        name: "OwnableEvent",
        type: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
        kind: "flat",
      },
      {
        name: "MultiTokenEvent",
        type: "token_bundler::multitoken::MultiToken::Event",
        kind: "flat",
      },
      {
        name: "ERC1155Event",
        type: "openzeppelin::token::erc1155::erc1155::ERC1155Component::Event",
        kind: "flat",
      },
      {
        name: "ERC1155ReceiverEvent",
        type: "openzeppelin::token::erc1155::erc1155_receiver::ERC1155ReceiverComponent::Event",
        kind: "flat",
      },
    ],
  },
] as const;
